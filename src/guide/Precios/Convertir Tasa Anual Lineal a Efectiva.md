#  Convertir Tasa Anual Lineal a Efectiva 

Método para convertir una tasa lineal anual a efectiva anual. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrecios.ConvertirTasaAnualLinealAEfectiva | RBTPG299 | Global 

> Ejemplo de invocación al servicio Convertir Tasa Anual Lineal a Efectiva: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrecios.ConvertirTasaAnualLinealAEfectiva> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>2081397563CD285A89A23FBE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:tasaOrigen>10</bts:tasaOrigen> 
         <bts:tipoAnio>2</bts:tipoAnio> 
         <bts:plazo>30</bts:plazo> 
      </bts:BTPrecios.ConvertirTasaAnualLinealAEfectiva> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ConvertirTasaAnualLinealAEfectiva=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
  	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "2081397563CD285A89A23FBE" 
	}, 
	"bts:tasaOrigen": "10", 
	"bts:tipoAño": "2", 
	"bts:plazo": "30" 
  } 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPrecios.ConvertirTasaAnualLinealAEfectivaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>2081397563CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <tasaDestino>10.47193</tasaDestino> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrecios.ConvertirTasaAnualLinealAEfectiva</Servicio> 
            <Fecha>2021-02-03</Fecha> 
            <Hora>12:55:21</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7968</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrecios.ConvertirTasaAnualLinealAEfectivaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "INSTALADOR", 
	  "Token": "2081397563CD285A89A23FBE", 
	  "Device": "GP" 
	}, 
	"tasaDestino": "10.47193", 
	"Erroresnegocio": {}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPrecios.ConvertirTasaAnualLinealAEfectiva", 
	  "Fecha": "2021-02-03", 
	  "Hora": "11:57:30", 
	  "Requerimiento": "1", 
	  "Numero": "7967", 
	  "Estado": "OK" 
	} 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tipoTasaOrigen | Short | Tipo de tasa origen [Hidden: Valor fijo '2' para este método]. 
tasaOrigen | Double | Tasa a convertir. 
tipoAnio | Short | Tipo de año [1 - Comercial / 2 - Calendario]. 
plazo | Int | Plazo. 
tipoTasaDestino | Short | Tipo de tasa destino [Hidden: Valor fijo '1' para este método]. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tasaDestino | Double | Tasa convertida. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar la tasa a convertir. 
30002 | Debe ingresar un tipo de año valido [1 - Comercial / 2 - Calendario]. 
30003 | Debe ingresar un plazo. 

 
