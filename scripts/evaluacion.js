var preguntitas = new Array();
            //las mega hiper preguntas que serán Random :P
            preguntitas[1] = 'En C&A contamos con dos pilares de negocio importantes, la Moda y los Productos Financieros, éste último es soportado por:';
			preguntitas[2] = 'Dentro de C&A existe el Área de Servicios y Productos Financieros, que permite obtener un financiamiento, sin necesidad de un endeudamiento para nuestros Clientes, además de: ';
			preguntitas[3] = 'Una de las ventajas por las que se considera importante el área de Servicios y Productos Financieros para un vendedor de C&A, es porque incentiva al Cliente a volver a la tienda, lo que permite al vendedor:';
			preguntitas[4] = 'El promedio de compra de nuestros tarjetahabientes es de 4.75 veces al año. Lo que permite que un Cliente con su tarjeta vuelva a la tienda unas:';
			preguntitas[5] = 'El crédito es un servicio que surgió en la Roma antigua, la palabra proviene del latín credere que significa “”yo creo en la palabra y la persona, en C&A es un concepto que siempre está presente y que según nuestra filosofía estaríamos:';
			preguntitas[6] = 'En C&A contamos con diferentes Productos Financieros, que te permiten ser un buen vendedor. Uno de estos es nuestro producto estrella, se trata de  un crédito revolvente, es decir, el Cliente puede comprar las veces que desee, estamos hablando de:';
			preguntitas[7] = 'La tarjeta C&A Trend, es una membresía que resalta la asociación de la marca C&A con la Moda, porque:';
			preguntitas[8] = 'Para ser un buen colaborador, debes identificar los diferentes tipos de Clientes, entre ellos encontramos que le gusta la calidad en el servicio además de la tendencia en la moda, nos estamos refiriendo al:';
			preguntitas[9] = 'Como colaborador es de suma importancia que tengas en cuenta el buen llenado de la solicitud del trámite. Éstas son dos de las características que debes revisar antes de su entrega.';
			preguntitas[10] = 'En C&A, tenemos en cuenta que al adquirir  un Producto Financiero, hay tres beneficios con los que contarás. ¿Cuáles son?';
			preguntitas[11] = 'Ramiro colaborador de C&A, ha detectado que el tipo de tarjetahabiente al cual abordó es ama de casa, para promover una mejor venta y brindarle un mejor servicio, él debe:';
			preguntitas[12] = 'Karina está pensando en realizar un viaje a la playa, el tipo de tarjeta que adquirió es Tarjeta Internacional, la cual fue diseñada para este tipo de tarjetahabientes. Una de las características que debe saber sobre esta tarjeta es que: ';
			preguntitas[13] = 'Alejandro es tarjetahabiente de C&A, y parte del Club de Beneficios. Tuvo un percance en camino a su trabajo, tiene duda sobre dónde comunicarse, y que debe hacer después del accidente, según el curso el debería:';
			preguntitas[14] = 'Javier colaborador de C&A está confundido por que no ha podido identificar qué tipo de tarjetahabiente está atendiendo, sospecha que podría ser universitario. ¿Cómo podría confirmarlo según el curso?';
			preguntitas[15] = 'Luis aún no es tarjetahabiente de C&A, tiene un buen trabajo y no le gusta tener límites en sus compras, además de poder comprar en otros establecimientos. Para poder ofrecer la tarjeta debes ofrecerle un beneficio para que la adquiera, ya que estos hacen que el Cliente sepa las ventajas que tendría adquiriéndola. ¿Cómo mencionarías un beneficio de cualquiera de los Productos Financieros de C&A?';

			
			
var lasbuenas = new Array();
            //las respuestas correctausssss :3
            lasbuenas[1] = 2;
			lasbuenas[2] = 3;
			lasbuenas[3] = 1;
			lasbuenas[4] = 1;
			lasbuenas[5] = 3;
			lasbuenas[6] = 1;
			lasbuenas[7] = 2;
			lasbuenas[8] = 1;
			lasbuenas[9] = 1;
			lasbuenas[10] = 2;
			lasbuenas[11] = 1;
			lasbuenas[12] = 3;
			lasbuenas[13] = 2;
			lasbuenas[14] = 1;
			lasbuenas[15] = 1;

	
var cachamela = false;
var conviertenumero = 0;
var conviertealeat = 0;
			
function verificarespuesta(answ, aleat)
{
	conviertenumero = Number(answ);
	conviertealeat = Number(aleat);
	if( conviertenumero == conviertealeat)
	{
		cachamela = true;
	}
	else
	{
		cachamela = false;
		
	}
	//alert(cachamela);
	return cachamela;
}
	
////////////// He aquí el show de los randoms... Para que usted se cuadre...

var randomsunicos = [];
var numRandoms = 15;

function echameunrandom() 
{
    // rellenar el array si es necesario... Pos si se ocurre!!!
    if (!randomsunicos.length) 
	{
        for (var i = 0; i < numRandoms; i++) 
		{
            randomsunicos.push(i);
        }
    }
    var index = Math.floor(Math.random() *  randomsunicos.length);
    var val = randomsunicos[index];
    // quitamos los valores del mega súper array
    randomsunicos.splice(index, 1);
    val = val + 1;
    return val;
}

var micalificacion = 0;

var totaldepreguntas = 0;

			
var confusionmultiplea = new Array();
var confusionmultipleb = new Array();
var confusionmultiplec = new Array();


			
            //las mega hiper preguntas que serán Random :P
            confusionmultiplea[1] = 'Área de Cajas.';
			confusionmultipleb[1] = 'Área de Servicios y Productos Financieros.';
			confusionmultiplec[1] = 'Área de Recursos Humanos.';
			
			confusionmultiplea[2] = 'Posibilidad de comprar en autoservicios.';
			confusionmultipleb[2] = 'Mayor número de posibilidades de ganar concursos.';
			confusionmultiplec[2] = 'Diferentes facilidades de pago.';
			
			confusionmultiplea[3] = 'Llegar a sus metas de venta y generar oportunidades de venta.';
			confusionmultipleb[3] = 'Realizar un mejor servicio la próxima visita del Cliente.';
			confusionmultiplec[3] = 'Considerar la importancia de su crédito en la tienda.';
			
			confusionmultiplea[4] = '10 veces al año.';
			confusionmultipleb[4] = '12 veces al año.';
			confusionmultiplec[4] = '15 veces al año.';
			
			confusionmultiplea[5] = 'Creyendo que no se endeudará.';
			confusionmultipleb[5] = 'Garantizando su pago.';
			confusionmultiplec[5] = 'Confiando en el Cliente.';
			
			confusionmultiplea[6] = 'Tarjeta C&A. ';
			confusionmultipleb[6] = 'Crédito Personal. ';
			confusionmultiplec[6] = 'Club de Beneficios.';
			
			confusionmultiplea[7] = 'Es para Clientes muy exclusivos de C&A.';
			confusionmultipleb[7] = 'Tiene una membresía a 3 meses sin intereses.';
			confusionmultiplec[7] = 'No hay penalización por realizar pagos adelantados.';
			
			confusionmultiplea[8] = 'Cliente tradicional.';
			confusionmultipleb[8] = 'Cliente ama de casa';
			confusionmultiplec[8] = 'Cliente Universitario.';
			
			confusionmultiplea[9] = 'Firmas iguales entre sí y solicitud sin tachaduras.';
			confusionmultipleb[9] = 'Coherencia entre domicilio y el ID presentado.';
			confusionmultiplec[9] = 'Buenas referencias personales.';
			
			confusionmultiplea[10] = 'Viajes, compras y descuentos.';
			confusionmultipleb[10] = 'Salud, vial y legal.';
			confusionmultiplec[10] = 'Crédito, gastronomía y spa.';
			
			confusionmultiplea[11] = 'Facilitarle la compra, acercarle tallas y consentirla.';
			confusionmultipleb[11] = 'Mostrarle Moda y tendencia de temporada.';
			confusionmultiplec[11] = 'Entablar una conversación y hacerla sentir importante.';
			
			confusionmultiplea[12] = 'Al realizar pagos fuera de la tienda se puede tener un cargo extra.';
			confusionmultipleb[12] = 'Es un préstamo en efectivo con el cual puede comprar en cualquier lugar.';
			confusionmultiplec[12] = 'Tiene pagos fijos donde compre, ya sea dentro o fuera de C&A.';
			
			confusionmultiplea[13] = 'Saber que tiene descuentos en laboratorios de algún lugar cercano al siniestro.';
			confusionmultipleb[13] = 'Saber que puede llamar una ambulancia y si no está siendo atendido adecuadamente poder pedir un traslado.';
			confusionmultiplec[13] = 'Saber que puede obtener ayuda telefónica en las sucursales de Call Center. ';
			
			confusionmultiplea[14] = 'Mostrarle algún tipo de accesorio de temporada o bien un artículo.';
			confusionmultipleb[14] = 'Comenzar una plática amena para conocer su edad.';
			confusionmultiplec[14] = 'Intentar que tome alguna prenda que se sabe tomaría el tarjetahabiente universitario.';
			
			confusionmultiplea[15] = 'Escuchándolo con atención para identificar su necesidad y comentarle que la aceptan en diversos establecimientos.';
			confusionmultipleb[15] = 'Identificar qué tipo de Cliente es y decirle que tiene meses sin intereses en los supermercados.';
			confusionmultiplec[15] = 'Comentarle que no tiene ningún tipo de anualidad para que la adquiera. ';