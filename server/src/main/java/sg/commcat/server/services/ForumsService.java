package sg.commcat.server.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sg.commcat.server.models.Comment;
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

            ZonedDateTime timestamp = instant.atZone(ZoneOffset.ofHours(8));
            ZonedDateTime now = ZonedDateTime.now(ZoneOffset.ofHours(8));

            LocalDate timestampDate = timestamp.toLocalDate();
            LocalDate nowDate = now.toLocalDate();

            if (timestampDate.isEqual(nowDate)) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Today at' h:mm a");
                String formattedTimestamp = timestamp.format(formatter);
                document.append("timestamp", formattedTimestamp);
            } else if (timestampDate.isEqual(nowDate.minusDays(1))) {
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
        ZonedDateTime timestamp = instant.atZone(ZoneOffset.ofHours(8));
        ZonedDateTime now = ZonedDateTime.now(ZoneOffset.ofHours(8));

        LocalDate timestampDate = timestamp.toLocalDate();
        LocalDate nowDate = now.toLocalDate();

        if (timestampDate.isEqual(nowDate)) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Today at' h:mm a");
            String formattedTimestamp = timestamp.format(formatter);
            retrievedDoc.append("timestamp", formattedTimestamp);
        } else if (timestampDate.isEqual(nowDate.minusDays(1))) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Yesterday at' h:mm a");
            String formattedTimestamp = timestamp.format(formatter);
            retrievedDoc.append("timestamp", formattedTimestamp);
        } else {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM dd 'at' h:mm a");
            String formattedTimestamp = timestamp.format(formatter);
            retrievedDoc.append("timestamp", formattedTimestamp);
        }

        for (Document comment : retrievedDoc.getList("comments", Document.class)) {
            long commentTimestampMillis = comment.getLong("timestamp");
            comment.remove("timestamp");

            Instant commentInstant = Instant.ofEpochMilli(commentTimestampMillis);

            ZonedDateTime commentTimeStamp = commentInstant.atZone(ZoneOffset.ofHours(8));
            ZonedDateTime commentNow = ZonedDateTime.now(ZoneOffset.ofHours(8));

            LocalDate commentTimestampDate = commentTimeStamp.toLocalDate();
            LocalDate commentNowDate = commentNow.toLocalDate();

            if (commentTimestampDate.isEqual(commentNowDate)) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Today at' h:mm a");
                String formattedTimestamp = commentTimeStamp.format(formatter);
                comment.append("timestamp", formattedTimestamp);
            } else if (commentTimestampDate.isEqual(commentNowDate.minusDays(1))) {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("'Yesterday at' h:mm a");
                String formattedTimestamp = commentTimeStamp.format(formatter);
                comment.append("timestamp", formattedTimestamp);
            } else {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM dd 'at' h:mm a");
                String formattedTimestamp = commentTimeStamp.format(formatter);
                comment.append("timestamp", formattedTimestamp);
            }
        }

        return retrievedDoc;
    }

    public String postNewComment(Comment comment) {

        String commentId = UUID.randomUUID().toString().substring(0, 8);

        Document thread = repo.getThreadById(comment.getId());
        Document commentObj = new Document();

        commentObj.append("_id", commentId)
                .append("username", comment.getUsername())
                .append("text", comment.getText())
                .append("timestamp", System.currentTimeMillis());

        thread.getList("comments", Document.class).add(commentObj);

        repo.postCommentInThread(thread);

        return commentId;
    }

}
