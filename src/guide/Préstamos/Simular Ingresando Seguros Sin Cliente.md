# Simular Ingresando Seguros Sin Cliente 

Método para simular el alta de un prestamo sin cliente ingresando los seguros a aplicar. Se permite el ingreso de seguros cualesquiera que se encuentren preseteados para el producto, siempre y cuando los importes de los mismos se resuelvan automáticamente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.SimularIngresandoSegurosSC | RBTPG467 | Global 

> Ejemplo de invocación al método Simular Ingresando Seguros Sin Clientes: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularIngresandoSegurosSC> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>387E2B35D9F43B80C31D1FF0</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:sdtPrestamoAlta> 
            <bts:plazoTotal>300</bts:plazoTotal> 
            <bts:productoUId>71</bts:productoUId> 
            <bts:monto>20000</bts:monto> 
            <bts:actividad>1111</bts:actividad> 
            <bts:valorCuota>5000</bts:valorCuota> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:cantidadCuotas></bts:cantidadCuotas> 
            <bts:tasa></bts:tasa> 
            <bts:fechaPrimerPago>2020-11-13</bts:fechaPrimerPago> 
            <bts:pizarra></bts:pizarra> 
         </bts:sdtPrestamoAlta> 
         <bts:sinSeguros>N</bts:sinSeguros> 
         <bts:sdtSeguros> 
            <bts:sBTSeguroSimulacion> 
               <bts:codigo>100</bts:codigo> 
            </bts:sBTSeguroSimulacion> 
         </bts:sdtSeguros> 
      </bts:BTPrestamos.SimularIngresandoSegurosSC> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularIngresandoSegurosSC' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Usuario": "MINSTALADOR", 
      "Device": "GL", 
      "Requerimiento": 1, 
      "Token": "01D45E9964612A4C8CCB1055" 
   }, 
   "sdtPrestamoAlta": { 
      "plazoTotal": "300", 
      "productoUId": "71", 
      "monto": "20000", 
      "actividad": "1111", 
      "valorCuota": "5000", 
      "periodoCuotas": "30", 
      "cantidadCuotas": "", 
      "tasa": "", 
      "fechaPrimerPago": "2020-11-13", 
      "pizarra": "" 
   }, 
   "sinSeguros": "N", 
   "sdtSeguros": { 
      "sBTSeguroSimulacion": { 
      "codigo": "100" 
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
      <BTPrestamos.SimularIngresandoSegurosSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>387E2B35D9F43B80C31D1FF0</Token> 
         </Btinreq> 
         <sdtSimulacionPrestamo> 
            <cft>28.210000</cft> 
            <plazo>360</plazo> 
            <tasa>23.000000</tasa> 
            <impuestos>452.410000</impuestos> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <fechaVencimiento>2021-10-13</fechaVencimiento> 
            <producto> 
               <papel>$</papel> 
               <moneda>$</moneda> 
               <productoUId>71</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
            <intereses>2027.72</intereses> 
            <fechaPrimerPago>2020-11-13</fechaPrimerPago> 
            <comisiones>0.000000</comisiones> 
            <valorCuota>5000.00</valorCuota> 
            <otrosConceptos> 
               <SdtsBTConcepto> 
                  <texto>SANCOR - Vida - Variante 1</texto> 
                  <valor>1440.00</valor> 
                  <concepto>100</concepto> 
               </SdtsBTConcepto> 
            </otrosConceptos> 
            <cronograma> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>5000.00</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-11-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-12-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-01-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-02-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-03-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-04-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-05-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-06-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-07-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-08-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-09-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>1719.44</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2021-10-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
            </cronograma> 
            <totalPrestamo>23942.44</totalPrestamo> 
            <capital>20000.00</capital> 
            <operacionUId>1</operacionUId> 
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual> 
            <seguros>1440.000000</seguros> 
            <tasaNominalAnual>20.881010</tasaNominalAnual> 
            <fechaValor>2020-10-13</fechaValor> 
         </sdtSimulacionPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11921</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularIngresandoSegurosSC</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-19</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>12:42:21</Hora> 
         </Btoutreq> 
      </BTPrestamos.SimularIngresandoSegurosSCResponse> 
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
      "Requerimiento": 1, 
      "Canal": "BTDIGITAL", 
      "Token": "72e34bcd9d4A8B5C60A82434" 
   }, 
   "sdtSimulacionPrestamo": { 
      "cft": "28.210000", 
      "plazo": "360", 
      "tasa": "23.000000", 
      "impuestos": "452.410000", 
      "tasaEfectiva": "0.000000", 
      "fechaVencimiento": "2021-10-13", 
      "producto": { 
      "papel": "$", 
      "moneda": "$", 
      "productoUId": "71", 
      "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      }, 
      "intereses": "2027.72", 
      "fechaPrimerPago": "2020-11-13", 
      "comisiones": "0.000000", 
      "valorCuota": "5000.00", 
      "otrosConceptos": { 
      "SdtsBTConcepto": { 
         "texto": "SANCOR - Vida - Variante 1", 
         "valor": "1440.00", 
         "concepto": "100" 
      } 
      }, 
      "cronograma": { 
      "SdtsBTCuotaPrestamoAlta": [ 
         { 
            "importe": "5000.00", 
            "redondeo": "0.00", 
            "fechaPago": "2020-11-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2020-12-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-01-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-02-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-03-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-04-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-05-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-06-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-07-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-08-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-09-13" 
         }, 
         { 
            "importe": "1719.44", 
            "redondeo": "0.00", 
            "fechaPago": "2021-10-13" 
         } 
      ] 
      }, 
      "totalPrestamo": "23942.44", 
      "capital": "20000.00", 
      "operacionUId": "1", 
      "tasaEfectivaAnual": "23.000000", 
      "seguros": "1440.000000", 
      "tasaNominalAnual": "20.881010", 
      "fechaValor": "2020-10-13" 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 623, 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.SimularIngresandoSeguros", 
      "Fecha": "2019-11-20", 
      "Requerimiento": 1, 
      "Hora": "09:23:04", 
      "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPrestamoAlta | SdtsBTDatosDespejeSinCliente  | Datos de la simulación. 
sinSeguros | String | Acción a tomar cuando la lista de seguros a aplicar es vacía (S: Simula sin tener en cuenta ningún seguro, N: Simula con los seguros preseteados). 
sdtSeguros | sBTSegurosSimulacion | Listado de códigos de seguros a aplicar. 

Los campos del tipo de dato estructurado SdtsBTDatosDespejeSinCliente  son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | -----------  
productoUId | Long | Identificador del producto. 
fechaPrimerPago | Date | Fecha primer pago. 
cantidadCuotas | Int | Cantidad de cuotas. 
periodoCuotas | Int | Período entre cuotas. 
plazoTotal | Int | Plazo total. 
valorCuota | Double | Valor cuota. 
monto | Double | Monto del préstamo. 
pizarra | Short | Código de pizarra. 
tasa | Double | Tasa. 
actividad | Long | Código de actividad. 

Los campos del tipo de dato estructurado sBTSegurosSimulacion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigo | Int | Código de seguro a aplicar. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sBTSimulacionPrestamo | sBTSimulacionPrestamo | Datos de simulación del prestamo. 

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
plazo | Int | Plazo del préstamo. 
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

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Codigo del seguro. 
valor | Double | Importe del seguro. 
texto | String | Descripcion del seguro. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de producto. 
30002| No se recuperó la cuenta para el Identificador: [Número de identificador]. 

 
