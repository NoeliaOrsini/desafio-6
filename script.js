const categorias = {
    frutas: [],
    lácteos: [],
    congelados: [],
    dulces: [],
    otros: []
  };
  
  let agregarAlimento = true;
  let comida = "";
  let categoria = "";
  let terminar = false;
  
  while (agregarAlimento && !terminar) {
    const respuesta = prompt("Indica '1' para agregar un alimento o '2' para eliminar uno.").toLowerCase();
  
    if (respuesta === "1") {
      comida = prompt("¿Qué alimento deseas agregar?");
      categoria = prompt("¿En qué categoría se encaja este alimento? (frutas, lácteos, congelados, dulces, otros)").toLowerCase();
  
      if (categorias[categoria] !== undefined) {
        categorias[categoria].push(comida);
      } else {
        categorias.otros.push(comida);
      }
    } else if (respuesta === "2") {
      const tieneElementos = Object.values(categorias).some(arr => arr.length > 0);
  
      if (tieneElementos) {
        let listaCompleta = "Lista de compras actual:\n";
        for (const cat in categorias) {
          listaCompleta += `${capitalize(cat)}: ${categorias[cat].join(", ") || "Ninguno"}\n`;
        }
        alert(listaCompleta);
  
        const eliminar = prompt("Escribe el nombre del alimento que deseas eliminar:");
        let encontrado = false;
  
        for (const cat in categorias) {
          const index = categorias[cat].indexOf(eliminar);
          if (index !== -1) {
            categorias[cat].splice(index, 1);
            alert(`El alimento "${eliminar}" ha sido eliminado de la categoría ${capitalize(cat)}.`);
            encontrado = true;
            break;
          }
        }
  
        if (!encontrado) {
          alert("¡No fue posible encontrar el alimento en la lista!");
        }
      } else {
        alert("La lista de compras está vacía. No hay elementos para eliminar.");
      }
    }
  
    const continuar = prompt("¿Deseas continuar o terminar? Responde 'continuar' o 'terminar'.").toLowerCase();
    if (continuar === "terminar") {
      terminar = true;
      agregarAlimento = false;
  
      const listaTextarea = document.getElementById('listaCompras');
      listaTextarea.value = "Lista de compras final:\n";
  
      for (const cat in categorias) {
        listaTextarea.value += `${capitalize(cat)}: ${categorias[cat].join(", ") || "Ninguno"}\n`;
      }
    }
  }
  
  // Función para capitalizar la primera letra de la categoría
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  