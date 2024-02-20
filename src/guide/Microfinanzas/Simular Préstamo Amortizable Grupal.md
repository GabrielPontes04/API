# Simular Préstamo Amortizable Grupal 

Método para simular la solicitud de un préstamo amortizable grupal. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.SimularAmortizableGrupal | RBTPG439 | Global 

> Ejemplo de invocación al método Simular Préstamo Amortizable Grupal: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.SimulaAmortizableGrupal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1973148151CD285A89A23FBE</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:sdtSimulacionAmortizableGrupal> 
            <bts:solicitudUId>11341</bts:solicitudUId> 
            <bts:productoUId>17</bts:productoUId> 
            <bts:fechaPrimerPago>2018-08-14</bts:fechaPrimerPago> 
            <bts:cantidadCuotas></bts:cantidadCuotas> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:pizarra/> 
            <bts:tasa/> 
            <bts:integrantesGrupo> 
               <bts:sBTIntegranteGrupoSolicitud> 
                  <bts:empresa></bts:empresa> 
                  <bts:clienteUId>91</bts:clienteUId> 
                  <bts:cuenta></bts:cuenta> 
                  <bts:monto>10500</bts:monto> 
                  <bts:destinoCredito>41</bts:destinoCredito> 
                  <bts:destinoCreditoDesc></bts:destinoCreditoDesc> 
                  <bts:valorCuota></bts:valorCuota> 
               </bts:sBTIntegranteGrupoSolicitud> 
               <bts:sBTIntegranteGrupoSolicitud> 
                  <bts:empresa></bts:empresa> 
                  <bts:clienteUId>102</bts:clienteUId> 
                  <bts:cuenta></bts:cuenta> 
                  <bts:monto>15000</bts:monto> 
                  <bts:destinoCredito>42</bts:destinoCredito> 
                  <bts:destinoCreditoDesc></bts:destinoCreditoDesc> 
                  <bts:valorCuota></bts:valorCuota> 
               </bts:sBTIntegranteGrupoSolicitud> 
               <bts:sBTIntegranteGrupoSolicitud> 
                  <bts:empresa></bts:empresa> 
                  <bts:clienteUId>119</bts:clienteUId> 
                  <bts:cuenta></bts:cuenta> 
                  <bts:monto>12500</bts:monto> 
                  <bts:destinoCredito>43</bts:destinoCredito> 
                  <bts:destinoCreditoDesc></bts:destinoCreditoDesc> 
                  <bts:valorCuota></bts:valorCuota> 
               </bts:sBTIntegranteGrupoSolicitud> 
            </bts:integrantesGrupo> 
            <bts:datosAdicionales> 
            </bts:datosAdicionales> 
         </bts:sdtSimulacionAmortizableGrupal> 
      </bts:BTMicrofinanzas.SimulaAmortizableGrupal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularAmortizableGrupal \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1", 
        "Usuario": "INSTALADOR", 
        "Token": "669747179CD285A89A23FBEE", 
        "Device": "1" 
    }, 
    "sdtSimulacionAmortizableGrupal": { 
        "solicitudUId": "11341", 
        "productoUId": "17", 
        "fechaPrimerPago": "2018-08-14", 
        "cantidadCuotas": "", 
        "periodoCuotas": "30", 
        "integrantesGrupo": { 
            "sBTIntegranteGrupoSolicitud": [ 
                { 
                "clienteUId": "91", 
                "monto": "10500", 
                "destinoCredito": "41" 
                }, 
                { 
                "clienteUId": "102", 
                "monto": "15000", 
                "destinoCredito": "42" 
                }, 
                { 
                "clienteUId": "119", 
                "monto": "12500", 
                "destinoCredito": "43" 
                } 
            ] 
        }, 
        "datosAdicionales": "" 
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
      <BTMicrofinanzas.SimulaAmortizableGrupalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1973148151CD285A89A23FBE</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <sdtSimulacionPrestamo> 
            <operacionUId>94</operacionUId> 
            <producto> 
               <productoUId>17</productoUId> 
               <nombre>PRESTAMOS, GRUPAL PAGO MENSUAL INT Y CAP</nombre> 
               <moneda>Q</moneda> 
               <papel>$</papel> 
            </producto> 
            <capital>38000.00</capital> 
            <valorCuota>7467.00</valorCuota> 
            <intereses>6802.02</intereses> 
            <tasa>36.000000</tasa> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <tasaEfectivaAnual>42.576089</tasaEfectivaAnual> 
            <tasaNominalAnual>36.000000</tasaNominalAnual> 
            <totalPrestamo>44802.02</totalPrestamo> 
            <fechaValor>2018-07-19</fechaValor> 
            <fechaVencimiento>2019-01-14</fechaVencimiento> 
            <fechaPrimerPago>2018-08-14</fechaPrimerPago> 
            <plazo>179</plazo> 
            <otrosConceptos></otrosConceptos> 
            <cronograma></cronograma> 
         </sdtSimulacionPrestamo> 
         <sdtIntegrantesGrupo> 
            <sBTIntegranteGrupoSolicitud> 
               <empresa>1</empresa> 
               <clienteUId>91</clienteUId> 
               <cuenta>PONTES SILVA GABRIEL</cuenta> 
               <monto>10500.00</monto> 
               <destinoCredito>41</destinoCredito> 
               <destinoCreditoDesc>CAPITAL DE TRABAJO PARA TEMPORADA ALTA</destinoCreditoDesc> 
               <valorCuota>2063.25</valorCuota> 
            </sBTIntegranteGrupoSolicitud> 
            <sBTIntegranteGrupoSolicitud> 
               <empresa>1</empresa> 
               <clienteUId>102</clienteUId> 
               <cuenta>BERGESSIO MARTINEZ GONZALO</cuenta> 
               <monto>15000.00</monto> 
               <destinoCredito>42</destinoCredito> 
               <destinoCreditoDesc>CAPITAL DE TRABAJO P.E.A.</destinoCreditoDesc> 
               <valorCuota>2947.50</valorCuota> 
            </sBTIntegranteGrupoSolicitud> 
            <sBTIntegranteGrupoSolicitud> 
               <empresa>1</empresa> 
               <clienteUId>119</clienteUId> 
               <cuenta>CERON RODRIGUEZ CESAR MAURICIO</cuenta> 
               <monto>12500.00</monto> 
               <destinoCredito>43</destinoCredito> 
               <destinoCreditoDesc>CAPITAL DE TRABAJO PERMANENTE P.E.A.</destinoCreditoDesc> 
               <valorCuota>2456.25</valorCuota> 
            </sBTIntegranteGrupoSolicitud> 
         </sdtIntegrantesGrupo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.SimulaAmortizableGrupal</Servicio> 
            <Fecha>2020-10-28</Fecha> 
            <Hora>11:03:57</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>5417</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.SimulaAmortizableGrupalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "1973148151CD285A89A23FBE", 
      "Device": "1" 
   }, 
   "sdtSimulacionPrestamo": { 
      "operacionUId": "94", 
      "producto": { 
         "productoUId": "17", 
         "nombre": "PRESTAMOS, GRUPAL PAGO MENSUAL INT Y CAP", 
         "moneda": "Q", 
         "papel": "$" 
      }, 
      "capital": "38000.00", 
      "valorCuota": "7467.00", 
      "intereses": "6802.02", 
      "tasa": "36.000000", 
      "tasaEfectiva": "0.000000", 
      "tasaEfectivaAnual": "42.576089", 
      "tasaNominalAnual": "36.000000", 
      "totalPrestamo": "44802.02", 
      "fechaValor": "2018-07-19", 
      "fechaVencimiento": "2019-01-14", 
      "fechaPrimerPago": "2018-08-14", 
      "plazo": "179" 
   }, 
   "sdtIntegrantesGrupo": { 
      "sBTIntegranteGrupoSolicitud": [ 
      { 
         "empresa": "1", 
         "clienteUId": "91", 
         "cuenta": "PONTES SILVA GABRIEL", 
         "monto": "10500.00", 
         "destinoCredito": "41", 
         "destinoCreditoDesc": "CAPITAL DE TRABAJO PARA TEMPORADA ALTA", 
         "valorCuota": "2063.25" 
      }, 
      { 
         "empresa": "1", 
         "clienteUId": "102", 
         "cuenta": "BERGESSIO MARTINEZ GONZALO", 
         "monto": "15000.00", 
         "destinoCredito": "42", 
         "destinoCreditoDesc": "CAPITAL DE TRABAJO P.E.A.", 
         "valorCuota": "2947.50" 
      }, 
      { 
         "empresa": "1", 
         "clienteUId": "119", 
         "cuenta": "CERON RODRIGUEZ CESAR MAURICIO", 
         "monto": "12500.00", 
         "destinoCredito": "43", 
         "destinoCreditoDesc": "CAPITAL DE TRABAJO PERMANENTE P.E.A.", 
         "valorCuota": "2456.25" 
      } 
      ] 
   }, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTMicrofinanzas.SimulaAmortizableGrupal", 
      "Fecha": "2020-10-28", 
      "Hora": "11:03:57", 
      "Requerimiento": "1", 
      "Numero": "5417", 
      "Estado": "OK" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtSimulacionAmortizableGrupal | sBTSimulacionAmortizableGrupal | Datos de la simulación grupal. 

Los campos del tipo de dato estructurado sBTSimulacionAmortizableGrupal son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
solicitudUId | Long | Identificador de instancia Workflow.  
productoUId | Long | Identificador único de producto. 
fechaPrimerPago | Date | Fecha de primer pago. 
cantidadCuotas | Int | Cantidad de cuotas. 
periodoCuotas | Int | Período entre vencimiento de cada cuota. 
pizarra | Short | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra. 
integrantesGrupo | sBTIntegranteGrupoSolicitud | Datos de los integrantes del grupo. 
datosAdicionales | sBTConcepto | Importe otros conceptos. 

Los campos del tipo de dato estructurado sBTIntegranteGrupoSolicitud son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
empresa | Short | Identificador de empresa. 
clienteUId | Long | Identificador único de cliente. 
cuenta | String | Cuenta del cliente. 
monto | Double | Monto solicitado por el cliente. 
destinoCredito | Int | Identificador del destino del crédito. 
destinoCreditoDesc | String | Nombre del destino del crédito. 
valorCuota | Double | Valor de la cuota. 

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtSimulacionPrestamo | sBTSimulacionPrestamo | Datos del préstamo simulado. 
sdtIntegrantesGrupo | sBTIntegranteGrupoSolicitud | Datos de los integrantes del grupo. 

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
producto | sBTProducto | Datos del producto. 
capital | Double | Capital del préstamo. 
valorCuota | Double | Valor cuota. 
intereses | Double | Intereses. 
tasa | Double | Tasa. 
tasaEfectiva | Double | Tasa efectiva. 
tasaEfectivaAnual | Double | Tasa efectiva anual. 
tasaNominalAnual | Double | Tasa nominal anual. 
totalPrestamo | Double | Total a pagar. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha de vencimiento. 
fechaPrimerPago | Date | Fecha de primer pago. 
plazo | Int | Plazo. 
otrosConceptos | sBTConcepto | Importe otros conceptos. 
cronograma | sBTCuotaSimulacion | Cronograma del préstamo. 

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago | Date | Fecha de pago. 
tipoCuota | String | Tipo de la cuota (Capital/Interés). 
concepto | String | Concepto. 
capital | Double | Monto de capital en la cuota. 
interes | Double | Monto de intereses en la cuota. 
seguros | Double | Monto de seguros en la cuota. 
impuestos | Double | Monto de impuestos en la cuota. 
otrosConceptos | Double | Importe correspondiente a otros conceptos. 
cuota | Double | Importe total de la cuota. 

Los campos del tipo de dato estructurado sBTIntegranteGrupoSolicitud son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
empresa | Short | Identificador de empresa. 
clienteUId | Long | Identificador único de cliente. 
cuenta | String | Cuenta del cliente. 
monto | Double | Monto solicitado por el cliente. 
destinoCredito | Int | Identificador del destino del crédito. 
destinoCreditoDesc | String | Nombre del destino del crédito. 
valorCuota | Double | Valor de la cuota. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la solicitud. 
30002 | No se recibió el identificador de producto. 
30003 | No se recuperó la cuenta para el Identificador: [Número de identificador]. 
30004 | No se recibió ningún integrante del grupo. 
40001 | El integrante no pertenece al grupo. 

 
