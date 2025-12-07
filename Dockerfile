FROM redis:7-alpine

# Expose Redis port to Render internal network only
EXPOSE 6379

# Enable protected mode and bind to all internal interfaces
CMD ["redis-server", "--protected-mode", "yes", "--bind", "0.0.0.0"]
