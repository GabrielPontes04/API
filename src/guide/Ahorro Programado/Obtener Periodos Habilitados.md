# Obtener Periodos Habilitados 

Método para obtener un listado de periodos habilitados para los casos que el alta de ahorro programado se realice mediante selección de período como lista de valores. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTAhorroProgramado.ObtenerPeriodosHabilitados | RBTPG419 | Global 

> Ejemplo de invocación al método Obtener Periodos Habilitados: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ObtenerPeriodosHabilitados> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:productoUId>41</bts:productoUId> 
      </bts:BTAhorroProgramado.ObtenerPeriodosHabilitados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerPeriodosHabilitados' \ 
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
		"productoUId": 41 
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
      <BTAhorroProgramado.ObtenerPeriodosHabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f2f7be2ebc4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPeriodos> 
            <sdtPeriodo> 
               <Tipo>M</Tipo> 
               <Descripcion>1 - Meses</Descripcion> 
               <Valor>1</Valor> 
            </sdtPeriodo> 
            <sdtPeriodo> 
               <Tipo>M</Tipo> 
               <Descripcion>2 - Meses</Descripcion> 
               <Valor>2</Valor> 
            </sdtPeriodo> 
            <sdtPeriodo> 
               <Tipo>M</Tipo> 
               <Descripcion>3 - Meses</Descripcion> 
               <Valor>3</Valor> 
            </sdtPeriodo> 
         </sdtPeriodos> 
         <Erroresnegocio></Erroresnegocio> 
		 <Btoutreq> 
            <Numero>370</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ObtenerPeriodosHabilitados</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-04-30</Fecha> 
            <Hora>11:21:10</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ObtenerPeriodosHabilitadosResponse> 
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
    "sdtPeriodos": { 
        "sBTPeriodo": [ 
            { 
                "Tipo": "M", 
                "Descripcion": "1 - Meses", 
                "Valor": "1" 
            }, 
            { 
                "Tipo": "M", 
                "Descripcion": "2 - Meses", 
                "Valor": "2" 
            }, 
            { 
                "Tipo": "M", 
                "Descripcion": "3 - Meses", 
                "Valor": "3" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "401", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ObtenerPeriodosHabilitados", 
        "Fecha": "2018-05-03", 
        "Requerimiento": "1", 
        "Hora": "11:10:49", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPeriodos | sBTPeriodo | Listado de periodos habilitados. 

Los campos del tipo de dato estructurado sBTPeriodo son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
Valor | Int | Período. 
Tipo | String | Tipo de período (Diario: 'D', Mensual: 'M', Anual: 'A'). 
Descripcion | String | Descripción extendida del período. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador del producto. 
30002 | No se recuperó el producto de ahorro para el identificador: [Número de identificador]. 
40001 | Error de configuración: No se definio listado de periodos. 

 
