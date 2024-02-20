# Simular Refinanciación por Saldo Capital 

Método para simular una refinanciación uno o más prestamos, siendo el capital del nuevo préstamo la suma de los saldos capitales de los seleccionados.  

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.SimularRefinanciacionSaldoCapital | RBTPG234 | Global 

> Ejemplo de invocación al método Simular Refinanciación por Saldo Capital: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularRefinanciacionSaldoCapital> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtRefinanciacion> 
            <bts:productoUId>61</bts:productoUId> 
            <bts:clienteUId>221</bts:clienteUId> 
            <bts:actividad>1111</bts:actividad> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:cantidadCuotas>12</bts:cantidadCuotas> 
            <bts:tasa>0</bts:tasa> 
            <bts:fechaPrimerPago/> 
            <bts:operaciones> 
            	<item>541</item> 
               </bts:operaciones> 
            <bts:pizarra>0</bts:pizarra> 
         </bts:sdtRefinanciacion> 
      </bts:BTPrestamos.SimularRefinanciacionSaldoCapital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularRefinanciacionSaldoCapital=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtRefinanciacion": { 
        "clienteUId": 4, 
        "productoUId": 61, 
        "fechaPrimerPago": "2018-12-10", 
        "monto": 1000, 
        "cantidadCuotas": 12, 
        "periodoCuotas": 30, 
		"tasa": 0, 
		"pizarra": 0, 
		"actividad": 11200, 
		"operaciones": { 
			"item":541		 
		} 

    } 
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPrestamos.SimularRefinanciacionSaldoCapitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>18bdf2801e4A8B5C60A82434</Token> 
         </Btinreq> 
         <refinanciacionId>122</refinanciacionId> 
         <sdtSimulacion> 
            <otrosConceptos></otrosConceptos> 
            <fechaValor>2020-03-13</fechaValor> 
            <capital>33000.00</capital> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <intereses>2541.84</intereses> 
            <tasaNominalAnual>23.000000</tasaNominalAnual> 
            <totalPrestamo>26742.34</totalPrestamo> 
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual> 
            <valorCuota>2228.53</valorCuota> 
            <operacionUId>541</operacionUId> 
            <tasa>23.000000</tasa> 
            <fechaPrimerPago>2020-04-13</fechaPrimerPago> 
            <fechaVencimiento>2021-03-13</fechaVencimiento> 
            <plazo>0</plazo> 
            <producto> 
               <papel/> 
               <moneda>$</moneda> 
               <productoUId>61</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <fechaPago>2017-08-10</fechaPago> 
                  <importe>10000.00</importe> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
         </sdtSimulacion> 
         <saldoCapitalCancelacion>33000.00</saldoCapitalCancelacion> 
         <deudaTotalCancelacion>34500.00</deudaTotalCancelacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>4417</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularRefinanciacionSaldoCapital</Servicio> 
            <Fecha>2018-12-14</Fecha> 
            <Requerimiento/> 
            <Hora>15:19:29</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.SimularRefinanciacionSaldoCapitalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtSimulacion": { 
        "otrosConceptos": { 
            "sBTConcepto": [] 
        }, 
        "fechaValor": "2018-11-05", 
        "capital": "1000.00", 
        "tasaEfectiva": "0.000000", 
        "intereses": "28.97", 
        "tasaNominalAnual": "23.000000", 
        "totalPrestamo": "2515.00", 
        "valorCuota": "209.58", 
        "tasaEfectivaAnual": "25.590075", 
        "operacionUId": "261", 
        "tasa": "23.000000", 
        "fechaPrimerPago": "2018-12-10", 
        "fechaVencimiento": "2019-11-10", 
        "producto": { 
            "papel": "", 
            "moneda": "$", 
            "productoUId": "0", 
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
        } 
        "cronograma": { 
            "sBTCuotaPrestamoAlta": [ 
                { 
                    "fechaPago": "2017-08-10", 
                    "importe": 10000.00 
                } 
            ] 
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "727", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.SimularRefinanciacionSaldoCapital", 
        "Fecha": "2017-11-24", 
        "Requerimiento": "", 
        "Hora": "15:59:42", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Configuración Backend 

1) Tiempo de validez de la simulación de una ampliación o refinanciación: 

	* Por defecto es 1440 minutos (24 horas). Este valor se puede modificar ingresando los minutos en el valor específico 1 de la guía especial 20100 para los correlativos 1, 2 y 3 igual cero. 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtRefinanciacion | sBTRefinanciacionAlta | Datos de simulación. 
accion | String | [Hidden: Valor fijo 'REFIS' para este método]. 

Los campos del tipo de dato estructurado sBTRefinanciacionAlta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId* | Long | Identificador único de cliente. 
productoUId* | Long | Identificador único de producto. 
fechaPrimerPago | Date | Fecha de primer pago. 
cantidadCuotas* | Int | Cantidad de cuotas. 
plazo | Int | Plazo de la operación. 
pizarra | Short | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra. 
actividad** | Long | Código de actividad (Destino del crédito). 
operaciones | Long | Lista de idententificares de operaciones a cancelar. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
refinanciacionId | Long | Identificador de refinanciación. 
sdtSimulacion | sBTSimulacionPrestamo | Datos del préstamo simulado. 
saldoCapitalCancelacion | Double | Saldo de capital total de los préstamos a consolidar. 
deudaTotalCancelacion | Double | Monto de cancelación total de los préstamos a consolidar. 

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de la operación. 
producto | sBTProducto | Datos del producto. 
capital | Double | Capital del préstamo. 
intereses | Double | Intereses. 
valorCuota | Double | Valor cuota. 
tasa | Double | Tasa. 
tasaEfectiva | Double | Tasa efectiva. 
tasaEfectivaAnual | Double | Tasa efectiva anual. 
tasaNominalAnual | Double | Tasa nominal anual. 
totalPrestamo | Double | Total a pagar. 
fechaPrimerPago | Date | Fecha de primer pago. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha de vencimiento. 
plazo | Int | Plazo. 
otrosConceptos | sBTConcepto | Otros conceptos. 
cronograma | sBTCuotaPrestamoAlta | Cronograma del préstamo. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto 
nombre | String | Nombre de producto 
moneda | String | Símbolo de moneda 
papel | String | Símbolo de papel 

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago | Date | Fecha de pago de la cuota. 
importe | Double | Importe de la cuota. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recibió el identificador de producto. 
30003 | No se recuperó la cuenta para el Identificador: [Número de Identificador]. 
30004 | No se indicaron operaciones a ampliar. 
30005 | No se recuperó la operación para el identificador [Número de Identificador]. 
40001 | La Cuenta indicada es incorrecta.          
40012 | La Fecha de Primer Pago indicada es menor a la Fecha Valor.        
40013 | La Fecha de Vencimiento indicada es menor a la Fecha Valor.        
40014 | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento. 
40015 | El Plazo Total indicado es incorrecto.                             
40016 | La Cantidad de Cuotas indicada es menor al mínimo permitido.       
40017 | La Cantidad de Cuotas indicada es mayor al máximo permitido.       
40018 | La Cantidad de Cuotas indicada es incorrecta.                      
40019 | La Cantidad de Cuotas indicada no está preseteada.                 
40020 | El período entre Cuotas indicado es menor al mínimo permitido.     
40021 | El período entre Cuotas indicado es mayor al máximo permitido.     
40022 | El período entre Cuotas indicado es incorrecto.                    
40023 | El período entre Cuotas indicado no está preseteado.               
40024 | El Valor Cuota indicado es incorrecto.                             
40025 | El Capital indicado es menor al mínimo permitido.                  
40026 | El Capital indicado es mayor al máximo permitido.                  
40027 | El Capital indicado es incorrecto.                                 
40037 | La Clase de Tasa indicada es incorrecta.                           
40040 | La Tasa Fija indicada está fuera de tolerancia.                    
40041 | La Tasa indicada es mayor a la Tasa de Usura.                      
40048 | El período indicado es incorrecto.                                 
40049 | El Tipo de Tasa indicado es incorrecto.                            
40054 | La Tasa indicada es incorrecta.                                    
40071 | El Plazo Total de la Operación es mayor al máximo permitido.       
40072 | El Plazo Total de la Operación es menor al mínimo permitido.       
40076 | El Producto indicado no está Preseteado.                           
40147 | No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago. 
40148 | El Capital indicado debe ser mayor al Valor Cuota.                 
40149 | No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago. 

ECHO está desactivado.
