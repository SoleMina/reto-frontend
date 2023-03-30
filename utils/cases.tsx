export const conditionalName = (title : string) => {
    switch (title) {
        case 'card_list':
          return 'Lista de tarjetas';
        case 'pays_transfer':
          return 'Transferencias y pagos';
        case 'support':
          return 'Atención al cliente';
        case 'enterprises':
          return 'Empresas';
        case 'between_cards':
          return 'Entre tarjetas';
        case 'banks':
          return 'Cuenta bancaria';
        case 'credit_card':
          return 'Tarjeta de crédito';
        case 'lock':
          return 'Cerrar cuenta';
        case 'change_pass':
          return 'Cambio de contraseña';
        default:
          console.log(`Sorry, we are out of ${title}.`);
      }
}