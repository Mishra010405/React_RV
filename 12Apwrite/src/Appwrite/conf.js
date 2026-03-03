import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteprojectID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ slug, title, content, featuredImage, status, userID }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            );
        } catch (error) {
            console.log("Appwrite Service Error:", error);
            throw error;
        }
    }

    async updatePost(slug,{tittle , content , featuredImage , status}) {
        try{
            return await this.databases.updateDocumnet(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    tittle,
                    content,
                    featuredImage,
                    status
                }

            )

        }
        catch(error) {
            console.log("Appwrite Service Error:"error);
            throw error;
            
        }
    }

    async datetePost({slug}) {
        try {
            return await this.databases.deleteDocument(
                this.appwriteDatabaseID,
                this.appwriteprojectID,
                slug
            )
            return true;

        }
        catch(error) {
            console.log("Appwrite Service Error:", error);
            return false
            
        }
    } 

    async getPost({slug}) {
        try {
            return await this.databases.listDocuments(
                this.appwriteDatabaseID,
                this.appwriteprojectID,
                slug
            )
            return true;

        }

        catch (error) {
            console.log("Appwrite Service Error:", error);
            return false;
        }
    }

    async getposts(queries = [Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(
                this.appwriteDatabaseID,
                this.appwriteprojectID,
                queries
            )

        }

        catch(error) {
            console.log("Appwrite Service Error:", error);
            return false;
            

        }
    }

    async uploadPost(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file,
            )

        }
        catch(error) {
            console.log("Appwrite Service Error:", error);
            return false;
            
        }
    }

    async deleteFile(fileId) {
        try{
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId
            )

        }
        catch(error) {
            console.log("Appwrite Service Error:", error);
            return false;
            
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketID,
            fileId
        )
    }
}

const service = new Service();
export default service;