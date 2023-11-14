# Utilisez une image de base Node.js
FROM node:14

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le code source Node.js dans le conteneur
COPY . .

# Installez les dépendances
RUN npm install

# Commande par défaut pour exécuter l'application Node.js
CMD ["node", "index.js"]
