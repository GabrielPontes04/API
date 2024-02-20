# Simular Ingresando Seguros 

Método para simular el alta de un prestamo ingresando los seguros a aplicar. Se permite el ingreso de seguros cualesquiera que se encuentren preseteados para el producto, siempre y cuando los importes de los mismos se resuelvan automáticamente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.SimularIngresandoSeguros | RBTPG509 | Global 

> Ejemplo de invocación al método Simular Ingresando Seguros: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularIngresandoSeguros> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>GL</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtPrestamoAlta> 
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago> 
            <bts:monto>10000</bts:monto> 
            <bts:tasa>0</bts:tasa> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:cantidadCuotas>12</bts:cantidadCuotas> 
            <bts:productoUId>61</bts:productoUId> 
            <bts:pizarra>0</bts:pizarra> 
            <bts:clienteUId>4</bts:clienteUId> 
            <bts:actividad>11200</bts:actividad> 
         </bts:sdtPrestamoAlta> 
         <bts:sinSeguros>N</bts:sinSeuros> 
         <bts:sdtSeguros> 
            <bts:sBTSegurosSimulacion> 
                <bts:codigo>100</bts:codigo> 
            </bts:sBTSegurosSimulacion> 
         </bts:sdtSeguros> 
      </bts:BTPrestamos.SimularIngresandoSeguros> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \ 
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
          "fechaPrimerPago": "2019-01-12", 
          "monto": 10000, 
          "tasa": 0, 
          "periodoCuotas": 30, 
          "cantidadCuotas": 12, 
          "productoUId": 61, 
          "pizarra": 0, 
          "clienteUId": 4, 
          "actividad": 11200 
        }, 
        "sinSeguros": "N", 
        "sdtSeguros": { 
          "sBTSegurosSimulacion": { 
            "codigo": 100 
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
      <BTPrestamos.SimularIngresandoSegurosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>72e34bcd9d4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtSimulacion> 
            <otrosConceptos> 
                <sBTConceptos> 
                    <concepto>100</concepto> 
                    <valor>1500.00</valor> 
                    <texto>Seguro vida</texto> 
                </sBTConceptos> 
            </otrosConceptos> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-01-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-02-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-03-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-04-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-05-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-06-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-07-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-08-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-09-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-10-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-11-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.04</importe> 
                  <fechaPago>2019-12-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
            <fechaValor>2018-12-11</fechaValor> 
            <capital>10000.00</capital> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <intereses>1288.18</intereses> 
            <tasaNominalAnual>23.000000</tasaNominalAnual> 
            <totalPrestamo>14328.15</totalPrestamo> 
            <valorCuota>1194.01</valorCuota> 
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual> 
            <operacionUId>1</operacionUId> 
            <tasa>23.000000</tasa> 
            <fechaPrimerPago>2019-01-12</fechaPrimerPago> 
            <fechaVencimiento>2019-12-12</fechaVencimiento> 
            <plazo>361</plazo> 
            <producto> 
               <papel>$</papel> 
               <moneda>$</moneda> 
               <productoUId>61</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>623</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularIngresandoSeguros</Servicio> 
            <Fecha>2019-11-20</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>09:23:04</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.SimularIngresandoSegurosResponse> 
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
        "sdtSimulacion": { 
          "otrosConceptos": { 
            "sBTConceptos": { 
              "concepto": 100, 
              "valor": 1500, 
              "texto": "Seguro vida" 
            } 
          }, 
          "cronograma": { 
            "sBTCuotaPrestamoAlta": [ 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-01-12" 
              }, 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-02-12" 
              }, 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-03-12" 
              }, 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-04-12" 
              }, 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-05-12" 
              }, 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-06-12" 
              }, 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-07-12" 
              }, 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-08-12" 
              }, 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-09-12" 
              }, 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-10-12" 
              }, 
              { 
                "importe": 1194.01, 
                "fechaPago": "2019-11-12" 
              }, 
              { 
                "importe": 1194.04, 
                "fechaPago": "2019-12-12" 
              } 
            ] 
          }, 
          "fechaValor": "2018-12-11", 
          "capital": 10000, 
          "tasaEfectiva": 0, 
          "intereses": 1288.18, 
          "tasaNominalAnual": 23, 
          "totalPrestamo": 14328.15, 
          "valorCuota": 1194.01, 
          "tasaEfectivaAnual": 25.590075, 
          "operacionUId": 1, 
          "tasa": 23, 
          "fechaPrimerPago": "2019-01-12", 
          "fechaVencimiento": "2019-12-12", 
          "plazo": 361, 
          "producto": { 
            "papel": "$", 
            "moneda": "$", 
            "productoUId": 61, 
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
          } 
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
sdtPrestamoAlta | sBTPrestamoAlta | Datos de la simulación. 
sinSeguros | String |  Acción a tomar cuando la lista de seguros a aplicar es vacía (S: Simula sin tener en cuenta ningún seguro, N: Simula con los seguros preseteados). 
sdtSeguros | sBTSegurosSimulacion | Listado de códigos de seguros a aplicar. 

Los campos del tipo de dato estructurado sBTPrestamoAlta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
productoUId | Long | Identificador único de producto. 
fechaPrimerPago | Date | Fecha de primer pago. 
cantidadCuotas | Int | Cantidad de cuotas. 
monto | Double | Capital solicitado. 
pizarra | Short | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra. 
actividad | Long | Código de actividad (Destino del crédito). 

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

 
