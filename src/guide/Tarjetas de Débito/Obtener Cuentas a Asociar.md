#  Obtener Cuentas a Asociar 

Método para obtener una lista de las posibles cuentas a asociar para una tarjeta de débito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.ObtenerCuentasAAsociar | RBTPG376 | Global 

> Ejemplo de invocación al servicio de Obtener Cuentas a Asociar: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerCuentasAAsociar> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>120109606CD285A89A23FBEE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:tarjetaUId>1</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.ObtenerCuentasAAsociar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerCuentasAAsociar' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cc9b534A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"tarjetaUId": "1", 
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
      <BTTarjetasDeDebito.ObtenerCuentasAAsociarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>120109606CD285A89A23FBEE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <sdtCuentasAAsociar> 
            <SdtsBTCuentaAAsociarTD> 
               <operacionUId>10212</operacionUId> 
               <producto> 
                  <productoUId>133</productoUId> 
                  <nombre>CUENTA CORRIENTE, GENÉRICA</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta/> 
            </SdtsBTCuentaAAsociarTD> 
            <SdtsBTCuentaAAsociarTD> 
               <operacionUId>10213</operacionUId> 
               <producto> 
                  <productoUId>93</productoUId> 
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta>PESOS</subCuenta> 
            </SdtsBTCuentaAAsociarTD> 
            <SdtsBTCuentaAAsociarTD> 
               <operacionUId>10214</operacionUId> 
               <producto> 
                  <productoUId>93</productoUId> 
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta>PESOS</subCuenta> 
            </SdtsBTCuentaAAsociarTD> 
         </sdtCuentasAAsociar> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerCuentasAAsociar</Servicio> 
            <Fecha>2021-11-30</Fecha> 
            <Hora>11:04:47</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8767</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerCuentasAAsociarResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 

``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
	    "Device": "GP", 
	    "Usuario": "MINSTALADOR", 
	    "Token": "16c1cc9b534A8B5C60A82434", 
	    "Canal": "BTDIGITAL", 
	    "Requerimiento": "1" 
    }, 
	"sdtCuentasAAsociar": { 
		"SdtsBTCuentaAAsociarTD": [ 
		  { 
			"operacionUId": "10212", 
			"producto": { 
			  "productoUId": "133", 
			  "nombre": "CUENTA CORRIENTE, GENÉRICA", 
			  "moneda": "$", 
			  "papel": "" 
			}, 
			"sucursal": "Casa Matriz", 
			"subCuenta": "" 
		  }, 
		  { 
			"operacionUId": "10213", 
			"producto": { 
			  "productoUId": "93", 
			  "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física", 
			  "moneda": "$", 
			  "papel": "" 
			}, 
			"sucursal": "Casa Matriz", 
			"subCuenta": "PESOS" 
		  }, 
		  { 
			"operacionUId": "10214", 
			"producto": { 
			  "productoUId": "93", 
			  "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física", 
			  "moneda": "$", 
			  "papel": "" 
			}, 
			"sucursal": "Casa Matriz", 
			"subCuenta": "PESOS" 
		  } 
		] 
	}, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTTarjetasDeDebito.ObtenerCuentasAAsociarResponse", 
        "Fecha": "2021-10-28", 
        "Hora": "15:39:53", 
        "Requerimiento": "1", 
        "Numero": "11003", 
        "Estado": "OK" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de tarjeta de débito. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtCuentasAAsociar | sBTCuentaAAsociarTD | Lista de cuentas a asociar. 

Los campos del tipo de dato estructurado sBTCuentaAAsociarTD son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
sucursal | String | Sucursal de la cuenta. 
subCuenta | String | Nombre de la cuenta. 
producto | sBTProducto | Datos del producto. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId	| Long	| Identificador único de producto. 
nombre	| String	| Nombre del producto. 
moneda	| String	| Símbolo de la moneda. 
papel	| String	| Símbolo del papel. 

### Errores 

Código | Descripción 
----------- | ----------- 
30001 | No se recibió el identificador de tarjeta de débito. 

 
