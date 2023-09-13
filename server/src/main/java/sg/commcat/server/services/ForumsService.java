package sg.commcat.server.services;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sg.commcat.server.models.Thread;
import sg.commcat.server.repositories.MongoRepo;

@Service
public class ForumsService {

    @Autowired
    private MongoRepo repo;

    public List<Document> getThreads() {
        List<Document> retrievedList = repo.getThreads();

        for (Document document : retrievedList) {
            long timestampMillis = document.getLong("timestamp");
            document.remove("timestamp");

            Instant instant = Instant.ofEpochMilli(timestampMillis);
            LocalDateTime timestamp = instant.atZone(ZoneId.systemDefault()).toLocalDateTime();
            LocalDateTime now = LocalDateTime.now();

            if (timestamp.toLocalDate().isEqual(now.toLocalDate())) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Today at' h:mm a");
                String formattedTimestamp = timestamp.format(formatter);
                document.append("timestamp", formattedTimestamp);
            } else if (timestamp.toLocalDate().isEqual(now.toLocalDate().minusDays(1))) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Yesterday at' h:mm a");
                String formattedTimestamp = timestamp.format(formatter);
                document.append("timestamp", formattedTimestamp);
            } else {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM dd 'at' h:mm a");
                String formattedTimestamp = timestamp.format(formatter);
                document.append("timestamp", formattedTimestamp);
            }
        }

        return retrievedList;

    }

    public String postNewThread(Thread thread) {
        String threadId = UUID.randomUUID().toString().substring(0, 8);

        Document threadToInsert = new Document();
        threadToInsert.append("_id", threadId)
                .append("username", thread.getUsername())
                .append("title", thread.getTitle())
                .append("text", thread.getText())
                .append("timestamp", System.currentTimeMillis())
                .append("comments", new ArrayList<Document>());

        repo.postNewThread(threadToInsert);

        return threadId;
    }

    public Document getThreadById(String id) {
        Document retrievedDoc = repo.getThreadById(id);

        long timestampMillis = retrievedDoc.getLong("timestamp");
        retrievedDoc.remove("timestamp");

        Instant instant = Instant.ofEpochMilli(timestampMillis);
        LocalDateTime timestamp = instant.atZone(ZoneId.systemDefault()).toLocalDateTime();
        LocalDateTime now = LocalDateTime.now();

        if (timestamp.toLocalDate().isEqual(now.toLocalDate())) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Today at' h:mm a");
            String formattedTimestamp = timestamp.format(formatter);
            retrievedDoc.append("timestamp", formattedTimestamp);
        } else if (timestamp.toLocalDate().isEqual(now.toLocalDate().minusDays(1))) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Yesterday at' h:mm a");
            String formattedTimestamp = timestamp.format(formatter);
            retrievedDoc.append("timestamp", formattedTimestamp);
        } else {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM dd 'at' h:mm a");
            String formattedTimestamp = timestamp.format(formatter);
            retrievedDoc.append("timestamp", formattedTimestamp);
        }

        return retrievedDoc;
    }

}