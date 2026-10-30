// MEMBRE 2 — Irrigation : lire les relevés des capteurs et décider quoi faire.
// Fiche : fiches/2-irrigation.md · Vérifier : npm run test:irrigation

// Renvoie seulement les relevés de la parcelle demandée.
export function revelesDeParcelle(reveles,idparcelle) {
  return reveles.filter((r) => r.parcelle === idparcelle);
  
// Renvoie la moyenne des humidités, arrondie à l'entier le plus proche.
// Liste vide : null (on ne peut pas calculer de moyenne).



// Renvoie 'INCONNU', 'ARROSER', 'DRAINER' ou 'OK'.
// Les bornes humiditeMin et humiditeMax font partie de la zone 'OK'.



// Renvoie un tableau d'alertes, une par parcelle, dans le même ordre que parcelles.
// Chaque alerte : { id, producteur, culture, moyenne, etat }

