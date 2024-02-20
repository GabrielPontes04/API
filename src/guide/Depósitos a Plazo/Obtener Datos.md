# Obtener Datos 

Método para obtener los datos de un producto de depósito a plazo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTDepositosAPlazo.ObtenerDatos | RBTPG014 | Global 

> Ejemplo de invocación al método Obtener Datos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerDatos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>5</bts:operacionUId> 
      </bts:BTDepositosAPlazo.ObtenerDatos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDatos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "operacionUId": 5, 
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
      <BTDepositosAPlazo.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPlazoFijo> 
            <plazo>360</plazo> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <periodicidad>0</periodicidad> 
            <simboloMoneda>$</simboloMoneda> 
            <fechaVencimiento>2016-12-22</fechaVencimiento> 
            <producto> 
               <papel/> 
               <moneda>$</moneda> 
               <productoUId>0</productoUId> 
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre> 
            </producto> 
            <intereses>55465.38</intereses> 
            <fechaProximoVencimiento>0000-00-00</fechaProximoVencimiento> 
            <tasaVigente>3.750000</tasaVigente> 
            <idOperacionBT>0010100000022000000000000000002700000000000085001</idOperacionBT> 
            <renovacionAutomatica>N</renovacionAutomatica> 
            <idOperacionFmt>85-0</idOperacionFmt> 
            <interesesPendientes>0.00</interesesPendientes> 
            <cantidadRenovaciones>0</cantidadRenovaciones> 
            <tasaOriginal>3.750000</tasaOriginal> 
            <interesesAcreditados>0.00</interesesAcreditados> 
            <tipoTasa>Efectiva Anual</tipoTasa> 
            <acreditacionPeriodicaIntereses>N</acreditacionPeriodicaIntereses> 
            <cuentaContable/> 
            <operacionUId>5</operacionUId> 
            <instruccionVencimiento> 
               <sucursal>Casa Matriz</sucursal> 
               <producto> 
                  <papel/> 
                  <moneda>$</moneda> 
                  <productoUId>0</productoUId> 
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
               </producto> 
               <descripcion>Cancelar y Acreditar al vto.</descripcion> 
               <operacionUId>9</operacionUId> 
               <idOperacionFmt>000000027_001</idOperacionFmt> 
            </instruccionVencimiento> 
            <instruccionAcreditacion> 
               <sucursal/> 
               <producto> 
                  <papel/> 
                  <moneda/> 
                  <productoUId>0</productoUId> 
                  <nombre/> 
               </producto> 
               <descripcion/> 
               <operacionUId>0</operacionUId> 
               <idOperacionFmt/> 
            </instruccionAcreditacion> 
            <saldo>0.00</saldo> 
            <montoInicial>1500000.00</montoInicial> 
            <estado/> 
            <diasHastaVencimiento>0</diasHastaVencimiento> 
            <montoFinal>0.00</montoFinal> 
            <sucursal>Casa Matriz</sucursal> 
            <fechaValor>2015-12-28</fechaValor> 
         </sdtPlazoFijo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>986</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTDepositosAPlazo.ObtenerDatos</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-22</Fecha> 
            <Hora>14:57:24</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerDatosResponse> 
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
    }, 
    "sdtPlazoFijo": { 
      "plazo": "360", 
      "tasaEfectiva": "0.000000", 
      "periodicidad": "0", 
      "simboloMoneda": "$", 
      "fechaVencimiento": "2016-12-22", 
      "producto": { 
        "papel": "", 
        "moneda": "$", 
        "productoUId": "0", 
        "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible" 
      }, 
      "intereses": "55465.38", 
      "fechaProximoVencimiento": "0000-00-00", 
      "tasaVigente": "3.750000", 
      "idOperacionBT": "0010100000022000000000000000002700000000000085001", 
      "renovacionAutomatica": "N", 
      "idOperacionFmt": "85-0", 
      "interesesPendientes": "0.00", 
      "cantidadRenovaciones": "0", 
      "tasaOriginal": "3.750000", 
      "interesesAcreditados": "0.00", 
      "tipoTasa": "Efectiva Anual", 
      "acreditacionPeriodicaIntereses": "N", 
      "cuentaContable": "", 
      "operacionUId": "5", 
      "instruccionVencimiento": { 
        "sucursal": "Casa Matriz", 
        "producto": { 
          "papel": "", 
          "moneda": "$", 
          "productoUId": "0", 
          "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física" 
        }, 
        "descripcion": "Cancelar y Acreditar al vto.", 
        "operacionUId": "9", 
        "idOperacionFmt": "000000027_001" 
      }, 
      "instruccionAcreditacion": { 
        "sucursal": "", 
        "producto": { 
          "papel": "", 
          "moneda": "", 
          "productoUId": "0", 
          "nombre": "" 
        }, 
        "descripcion": "", 
        "operacionUId": "0", 
        "idOperacionFmt": "" 
      }, 
      "saldo": "0.00", 
      "montoInicial": "1500000.00", 
      "estado": "", 
      "diasHastaVencimiento": "0", 
      "montoFinal": "0.00", 
      "sucursal": "Casa Matriz", 
      "fechaValor": "2015-12-28" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
      "Numero": "986", 
      "Estado": "OK", 
      "Servicio": "BTDepositosAPlazo.ObtenerDatos", 
      "Requerimiento": "", 
      "Fecha": "2017-12-22", 
      "Hora": "14:57:24", 
      "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
expresadoEn | String | [M-Moneda / E-Especie]  

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPlazoFijo | sBTPlazoFijo | Datos del depósito a plazo. 

Los campos del tipo de dato estructurado sBTPlazoFijo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
producto | sBTProducto | Datos del producto. 
sucursal | String | Nombre de la sucursal de alta. 
simboloMoneda | String | Simbolo moneda. 
cuentaContable | String | Nombre de la cuenta contable. 
estado | String | Descripción de estado. 
montoInicial | Double | Capital inicial del depósito. 
intereses | Double | Total de intereses del depósito. 
interesesAcreditados | Double | Intereses acreditados. 
interesesPendientes | Double | Intereses pendientes. 
fechaValor | Date | Fecha de alta. 
fechaVencimiento | Date | Fecha de vencimiento. 
diasHastaVencimiento | Int | Dias restantes hasta el vencimiento. 
saldo | Double | Saldo Actual. 
plazo | Int | Plazo en días. 
periodicidad | Int | Periodicidad de acreditación de intereses. 
fechaProximoVencimiento | Date | Fecha para proximo vencimiento. 
tasaOriginal | Double | Tasa original. 
tasaVigente | Double | Tasa vigente. 
tipoTasa | String | Tipo de tasa. 
tasaEfectiva | Double | Tasa efectiva. 
cantidadRenovaciones | Short | Cantidad de renovaciones del depósito. 
renovacionAutomatica | String | Renovación automatica (S/N). 
acreditacionPeriodicaIntereses | String | Acredita periodicamente intereses (S/N). 
instruccionVencimiento | sBTInstruccion | Datos de la instrucción al vencimiento. 
instruccionAcreditacion | sBTInstruccion | Datos de la instrucción de acreditación. 

Los campos del tipo de dato estructurado sBTInstruccion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripción de la instrucción. 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
producto | sBTProducto | Datos de producto. 
sucursal | String | Nombre de la Sucursal de la operación. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó la operación para el identificador. 

 
