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

    // CREATE POST
    async createPost({ slug, title, content, featuredImage, status, userID }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                { title, content, featuredImage, status, userID }
            );
        } catch (error) {
            console.log("Appwrite Service Error:", error);
            throw error;
        }
    }

    // UPDATE POST
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                { title, content, featuredImage, status }
            );
        } catch (error) {
            console.log("Appwrite Service Error:", error);
            throw error;
        }
    }

    // DELETE POST
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite Service Error:", error);
            return false;
        }
    }

    // GET SINGLE POST
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            );
        } catch (error) {
            console.log("Appwrite Service Error:", error);
            return false;
        }
    }

    // GET ALL POSTS
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries
            );
        } catch (error) {
            console.log("Appwrite Service Error:", error);
            return false;
        }
    }

    // UPLOAD FILE
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite Service Error:", error);
            return false;
        }
    }

    // DELETE FILE
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite Service Error:", error);
            return false;
        }
    }

    // FILE PREVIEW
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketID,
            fileId
        );
    }
}

const service = new Service();
export default service;