const config = {
    appwriteURL: String(import.meta.env.VITE_APPWIRTE_URL),
    appwriteprojectID: String(import.meta.env.VITE_APPWIRTE_PROJECT_ID),
    appwriteprojectDatabase: String(import.meta.env.VITE_APPWIRTE_DATABASE_ID),
    appwriteprojectID: String(import.meta.env.VITE_APPWIRTE_BUCKET_ID)

}

export default config