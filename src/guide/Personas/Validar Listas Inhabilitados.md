# Validar Listas Inhabilitados 

Método para obtener todas las listas de inhabilitados en las que se encuentra una persona a partir de los datos ingresados. (Es mandatorio ingresar al menos una de las siguientes claves: pais, tipo de documento y número de documento, o primer nombre y primer apellido) 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ValidarListasInhabilitados | RBTPG313 | Global 

> Ejemplo de invocación al método Validar Listas Inhabilitados: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ValidarListasInhabilitados> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>ccbe8f2A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:pais>845</bts:pais> 
         <bts:tipoDocumento>1</bts:tipoDocumento> 
         <bts:numeroDeDocumento>27511184</bts:numeroDeDocumento> 
         <bts:tipoPersona></bts:tipoPersona> 
         <bts:primerNombre></bts:primerNombre> 
         <bts:segundoNombre></bts:segundoNombre> 
         <bts:primerApellido></bts:primerApellido> 
         <bts:segundoApellido></bts:segundoApellido> 
         <bts:razonSocial></bts:razonSocial> 
      </bts:BTPersonas.ValidarListasInhabilitados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ValidarListasInhabilitados' \ 
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
	"pais":"845", 
	"tipoDocumento":"1", 
	"numeroDeDocumento":"27511184", 
	"tipoPersona":"", 
	"primerNombre":"", 
	"segundoNombre":"", 
	"primerApellido":"", 
	"segundoApellido":"", 
	"razonSocial":"" 
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
      <BTPersonas.ValidarListasInhabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ccbe8f2A82434</Token> 
         </Btinreq> 
         <sdtListaInhabilitados> 
            <sBTListaInhabilitados> 
               <descripcion>LAVADO DE DINERO</descripcion> 
               <fechaHasta>0000-00-00</fechaHasta> 
               <fechaDesde>2016-06-13</fechaDesde> 
               <codigo>1</codigo> 
               <bloqueante>S</bloqueante> 
            </sBTListaInhabilitados> 
         </sdtListaInhabilitados> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8508</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ValidarListasInhabilitados</Servicio> 
            <Fecha>2019-05-09</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>10:32:18</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ValidarListasInhabilitadosResponse> 
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
	"sdtListaInhabilitados": { 
		"sBTListaInhabilitados": { 
			"descripcion": "LAVADO DE DINERO", 
			"fechaHasta": "0000-00-00", 
			"fechaDesde": "2016-06-13", 
			"codigo": "1", 
			"bloqueante": "S" 
		} 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ValidarListasInhabilitados", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
pais | Short | Identificador de país. 
tipoDocumento | Short | Identificador de tipo de documento. 
numeroDocumento | String | Numero de documento. 
tipoPersona | String | Tipo de persona (Física / Jurídica). 
primerNombre | String | Primer nombre. 
segundoNombre | String | Segundo nombre. 
primerApellido | String | Primer apellido. 
segundoApellido | String | Segundo apellido. 
razonSocial | String | Razón social. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
listaInhabilitados | sBTListaInhabilitados | Listado de lista de inhabilitados. 

Los campos del tipo de dato estructurado sBTListaInhabilitados son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigo | Short | Identificador de lista de inhabilitados. 
descripcion | String | Descripción de lista de inhabilitados. 
bloqueante | String | ¿Es bloqueante? (S/N). 
fechaDesde | Date | Fecha en que la persona ingresa a la lista de inhabilitados. 
fechaHasta | Date | Fecha en que la persona deja de pertenecer a la lista.																		    

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se ingresó primer nombre de la persona. 
30002 | No se ingresó primer apellido de la persona. 
30003 | No se ingresó país de la persona. 
30004 | No se ingresó tipo de documento de la persona. 
30005 | No se ingresó documento de la persona. 

ECHO está desactivado.
