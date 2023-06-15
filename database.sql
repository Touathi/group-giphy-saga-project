CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- Favorite table
CREATE TABLE "favorite" (
	"id" SERIAL PRIMARY KEY,
	"giphy_name" VARCHAR(200),
	"giphy_url" VARCHAR(200),
	"category_id" integer REFERENCES "category");


-- dummy test data
INSERT INTO "favorite" ("giphy_name", "giphy_url")
VALUES ('test_giphy', 'https://media1.giphy.com/media/6A4ZswXnm3FnH4JDUm/giphy.gif?cid=516fc6962poqmlzkxajwg5l3bdqo01e1que43wdg2e2guks7&ep=v1_gifs_trending&rid=giphy.gif&ct=g');