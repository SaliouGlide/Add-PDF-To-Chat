window.function = async function(urlPdf, checkIDpdf) {
  urlPdf = urlPdf.value ?? "";
  checkIDpdf = checkIDpdf.value ?? "";
  
  // Vérifier si la colonne Réponse est vide et si le rôle est 'user'
  if (checkIDpdf === "") {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.chatpdf.com/v1/sources/add-url');
      xhr.setRequestHeader('x-api-key', 'sec_orx66UDiflDtBdPUsKtpfb1IDebY9aS3');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          // Gérez les erreurs côté serveur et renvoyez-les comme message d'erreur
          const errorMessage = xhr.statusText || 'Erreur lors de la requête';
          reject(new Error(errorMessage));
        }
      };
      xhr.onerror = function () {
        // Affichez les erreurs réseau
        reject(new Error('Erreur réseau lors de la requête'));
      };
      const data = JSON.stringify({
        url: urlPdf,
      });
      xhr.send(data);
    });
  } else {
    // Colonne ID pdf non vide, renvoyer une réponse déjà envoyée
    return 'ID pdf déjà envoyé';
    return new Promise((resolve, reject) => {
      reject(new Error('Réponse déjà envoyée'));
    });
  }
};
