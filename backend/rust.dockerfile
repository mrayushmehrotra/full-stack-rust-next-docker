# Build Stage
FROM rust:1.69-buster as builder

WORKDIR /app

ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

COPY . .

RUN cargo build --release

FROM debian:buster-slim

WORKDIR /app

# Copy the built binary from the builder stage
COPY --from=builder /app/target/release/backend .

CMD ["./backend"]
