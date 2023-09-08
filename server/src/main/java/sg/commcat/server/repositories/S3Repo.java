package sg.commcat.server.repositories;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Repository
public class S3Repo {

    @Autowired
    private AmazonS3 s3;

    private String bucketEndpointUrl = "https://commcat.sgp1.digitaloceanspaces.com/";

    public String uploadImage(MultipartFile picture, String catId) {
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType(picture.getContentType());
        metadata.setContentLength(picture.getSize());

        try {
            PutObjectRequest req = new PutObjectRequest("commcat", catId, picture.getInputStream(), metadata);
            req = req.withCannedAcl(CannedAccessControlList.PublicRead);
            s3.putObject(req);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return bucketEndpointUrl + catId;
    }
}