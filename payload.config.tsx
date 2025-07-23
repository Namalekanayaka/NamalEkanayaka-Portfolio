import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

export default buildConfig({
  // Rich Text Editor
  editor: lexicalEditor(),

  // Define collections here
  collections: [],

  // Secret for Payload Admin UI sessions
  secret: process.env.PAYLOAD_SECRET || "dev-secret",

  // Use Postgres DB adapter (pass config, not a Pool instance)
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),

  // Image processing
  sharp,
});
