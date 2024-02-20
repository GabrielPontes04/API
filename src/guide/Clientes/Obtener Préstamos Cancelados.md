# Obtener Préstamos Cancelados 

Método para devolver un listado de las operaciones de préstamos cancelados para un cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ObtenerPrestamosCancelados | RBTPG219 | Global 

> Ejemplo de invocación al servicio Obtener Prestamos Cancelados: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerPrestamosCancelados> 
         <bts:Btinreq> 
            <bts:Device>MC</bts:Device> 
            <bts:Token>b674899860CD285A89A23FBE</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:clienteUId>5</bts:clienteUId> 
      </bts:BTClientes.ObtenerPrestamosCancelados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamosCancelados \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{	 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "324915377F955E77534D3E02" 
	}, 
    "clienteUId": "10010", 
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
      <BTClientes.ObtenerPrestamosCanceladosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>MC</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b674899860CD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtPrestamos> 
            <sBTPrestamoCancelado> 
               <operacionUId>1</operacionUId> 
               <idOperacionFmt>0000000170-000</idOperacionFmt> 
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
               <fechaValor>2019-01-15</fechaValor> 
               <fechaVencimiento>2020-01-15</fechaVencimiento> 
               <fechaCancelacion>2020-01-15</fechaCancelacion> 
            </sBTPrestamoCancelado> 
         </sdtPrestamos> 
         <Erroresnegocio/> 
         <Btoutreq> 
            <Numero>270</Numero> 
            <Servicio>BTClientes.ObtenerPrestamosCancelados</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-04-13</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>10:42:34</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerPrestamosCanceladosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
	"Btinreq": { 
		"Device": "MC", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "b674899860CD285A89A23FBE" 
	}, 
	"sdtPrestamos": { 
		"sBTPrestamoCancelado": { 
			"operacionUId": "1", 
			"idOperacionFmt": "0000000170-000", 
			"idOperacionBT": "0010000100101000000000000000002700000000000170003", 
			"producto": { 
				"productoUId": "0", 
				"nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad", 
				"moneda": "$", 
				"papel": "" 
			}, 
			"sucursal": "Sucursal Beta", 
			"fechaValor": "2019-01-15", 
			"fechaVencimiento": "2020-01-15", 
			"fechaCancelacion": "2020-01-15" 
		} 
	}, 
	"Erroresnegocio": "", 
	"Btoutreq": { 
		"Numero": "270", 
		"Servicio": "BTClientes.ObtenerPrestamosCancelados", 
		"Estado": "OK", 
		"Fecha": "2020-04-13", 
		"Requerimiento": "1", 
		"Hora": "10:42:34", 
		"Canal": "BTDIGITAL" 
	}, 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId   | Long  	   |Identificador de cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPrestamos | sBTPrestamoCancelado | Listado de préstamos cancelados. 

Los campos del tipo de dato estructurado sBTPrestamoCancelado son los siguientes: 

Campo |   Tipo  | Comentarios  
--------- | ----------- | ----------- 
operacionUId |	Long |	Identificador único de operación. 
idOperacionFmt |	String |	Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT |	String | 	Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
producto |	sBTProducto | 	Datos del producto. 
sucursal | String | Nombre de la sucursal. 
fechaValor | Date | Fecha valor de la operación. 
fechaVencimiento | Date | Fecha de vencimiento. 
fechaCancelacion | Date | Fecha de cancelación. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo |   Tipo  | Comentarios  
--------- | ----------- | ----------- 
Campo | 	Tipo | 	Comentarios. 
productoUId | 	Long | 	Identificador único de producto. 
nombre |	String | 	Nombre de producto. 
moneda |	String 	| Símbolo de moneda. 
papel |	String |	Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recuperó la cuenta para el Identificador. 

 
