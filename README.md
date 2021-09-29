# gRPC Feature Flagging Service

This is a lightweight gRPC feature flagging system with only a few dependencies:
- TypeScript
- Prisma
- SQLite

## ERD Structure
The SQLite database follows a jointed table approach. Originally I had planned to use Postgres JSONB data types, but since persistent databases were discouraged I went with this approach. It turns out that SQLite 3.9 introduced JSON1, but I did not adopt it due to some C compiling issues on my machine. In the future, NoSQL approaches might be better suited for this task.
![](https://i.imgur.com/Gub5Vkr.png)

## Recommendations

I recommend [DB Browser](https://sqlitebrowser.org/) as your SQLite GUI tool. Be sure to open the database read-only when your code is running to ensure you don't lock the database.

For a great gRPC testing GUI, I highly encourage you to download [BloomRPC](https://github.com/uw-labs/bloomrpc).

## Usage

```bash
git clone git@github.com:GeorgeWillaman/gRPC-Feature-Flagging.git # Download repo

cd gRPC-Feature-Flagging # Change directory into repo

npm i # Install required packages

./scripts/protogen.sh # Generate type files for proto files

npx prisma migrate dev # Generate & apply migration to SQLite database

npm run dev # Cleans dist, copies proto files, compiles, and runs. Optimization work still needs to be done
```

# What needs to be done
* Sanity Checks
  * Currently there are barely any input validation and sanity checks. For production, this is a crucial element. I did not have time to implement them to a degree that I was happy with.
* Migration to a persistent database
  * For a production implementation, SQLite **should not** be used. MongoDB/PostgreSQL are 2 great alternatives for both SQL and NoSQL experts.

(I'll come back to this!)
## Notes
- There have been [documented issues](https://github.com/prisma/prisma/issues/2955) with SQLite locking during deletions causing the app to crash. As a bandaid solution, a socket timeout of 20 has been provided in `prisma/schema.prisma`.