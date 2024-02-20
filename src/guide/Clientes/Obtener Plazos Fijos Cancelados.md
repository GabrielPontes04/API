# Obtener Plazos Fijos Cancelados 

Método para devolver el listado de los productos de depósito a plazo fijo cancelados de un cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ObtenerPlazosFijosCancelados | RBTPG275 | Global 

### Configuración Backend 

1) Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | 3 
Correlativo 2 | 1 
Valor específico 1 | Identificador del módulo a incluir. 

2) Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | 3 
Correlativo 2 | 2 
Valor específico 1 | Módulo del tipo de operación a excluir. 
Valor específico 2 | Tipo de operación a excluir. 

> Ejemplo de invocación al método Obtener Plazos Fijos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerPlazosFijosCancelados> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>4</bts:clienteUId> 
      </bts:BTClientes.ObtenerPlazosFijosCancelados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPlazosFijosCancelados=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 315347e0-dc1b-de4d-6160-6f4f39d19acb' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": 4 
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
      <BTClientes.ObtenerPlazosFijosCanceladosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>845cec4b724A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductosPlazoFijoCancelados> 
            <SdtsBTProductoPlazoFijoCancelado> 
               <operacionUId>73</operacionUId> 
               <idOperacionFmt>0000000108_00000</idOperacionFmt> 
               <idOperacionBT>00100102200000000000000029000000000108001</idOperacionBT> 
               <producto> 
                  <productoUId>5</productoUId> 
                  <nombre>DPF Intransferible Mda. Nac.</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <fechaAlta>2016-10-26</fechaAlta> 
               <fechaVencimiento>2016-10-26</fechaVencimiento> 
               <capital>10000.00</capital> 
               <intereses>0.00</intereses> 
               <impuestos>0.00</impuestos> 
               <instruccion>Cancelar y Acreditar al vto.</instruccion> 
               <instruccionCod>2</instruccionCod> 
               <tasaOriginal>2.750000</tasaOriginal> 
               <tasaFinal>2.750000</tasaFinal> 
               <tipoTasa/> 
               <plazo>0</plazo> 
            </SdtsBTProductoPlazoFijoCancelado> 
         </sdtProductosPlazoFijoCancelados> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>783</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerPlazosFijosCancelados</Servicio> 
            <Fecha>2017-12-15</Fecha> 
            <Requerimiento/> 
            <Hora>13:49:48</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerPlazosFijosCanceladosResponse> 
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
    "sdtProductosPlazoFijoCancelados": { 
		"SdtsBTProductoPlazoFijoCancelado": { 
		  "operacionUId": "73", 
		  "idOperacionFmt": "0000000108_00000", 
		  "idOperacionBT": "00100102200000000000000029000000000108001", 
		  "producto": { 
			"productoUId": "5", 
			"nombre": "DPF Intransferible Mda. Nac.", 
			"moneda": "$", 
			"papel": "" 
		  }, 
		  "sucursal": "Casa Matriz", 
		  "fechaAlta": "2016-10-26", 
		  "fechaVencimiento": "2016-10-26", 
		  "capital": "10000.00", 
		  "intereses": "0.00", 
		  "impuestos": "0.00", 
		  "instruccion": "Cancelar y Acreditar al vto.", 
		  "instruccionCod": "2", 
		  "tasaOriginal": "2.750000", 
		  "tasaFinal": "2.750000", 
		  "tipoTasa": "", 
		  "plazo": "0" 
		} 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "784", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerPlazosFijosCancelados", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "13:50:44", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtProductosPlazoFijoCancelados | sBTProductoPlazoFijoCancelado | Listado de plazos fijos cancelados. 

Los campos del tipo de dato estructurado sBTProductoPlazoFijoCancelado son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
producto | sBTProducto | Datos del producto. 
sucursal | String | Nombre de la sucursal. 
fechaAlta | Date |	Fecha de alta del depósito. 
fechaVencimiento | Date | Fecha de vencimiento del depósito. 
capital | Double | Capital del depósito. 
intereses | Double | Intereses del depósito. 
impuestos | Double | Impuestos del deposito. 
instruccion | String | Descripción de la instrucción del depósito. 
instruccionCod | Short | Código de instrucción. 
tasaOriginal | Double |	Tasa original del depósito. 
tasaFinal | Double | Tasa final del depósito. 
tipoTasa | String |	Descripción del tipo de tasa. 
plazo | Int |	Plazo del depósito 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre de producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recuperó la cuenta para el Identificador. 

 
