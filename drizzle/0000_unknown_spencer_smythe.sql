CREATE TABLE "assets" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer DEFAULT 0,
	"inUse" boolean NOT NULL,
	"inUseSince" timestamp with time zone DEFAULT now()
);
