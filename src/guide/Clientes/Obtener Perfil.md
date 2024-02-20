# Obtener Perfil 

Método para obtener los datos de la persona titular de una cuenta cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ObtenerPerfil | RBTPG002 | Global 

> Ejemplo de invocación al método Obtener Perfil: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerPerfil> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0306ebbd9c4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>181</bts:clienteUId> 
      </bts:BTClientes.Obtener> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPerfil=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": 181 
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
      <BTClientes.ObtenerPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.118</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>7d434761a1F955E77534D3E0</Token> 
         </Btinreq> 
         <sCTPersona> 
            <profesion/> 
            <estadoCivil/> 
            <domicilio> 
               <localidad>LOS CHILCOS</localidad> 
               <departamento>BUENOS AIRES</departamento> 
               <direccion>? 123 ?</direccion> 
               <pais>ARGENTINA, REPUBLICA</pais> 
               <barrio/> 
               <propietario/> 
               <longitud>0E-9.000000000</longitud> 
               <zona/> 
               <codPostal/> 
               <latitud>0E-9.000000000</latitud> 
            </domicilio> 
            <fechaNacimiento>1950-12-12</fechaNacimiento> 
            <apellidos>Prueba Pruebass</apellidos> 
            <personaUId>0</personaUId> 
            <sexo>Masculino</sexo> 
            <actividad>Familias y Personas Fisicas</actividad> 
            <telefono>55555555</telefono> 
            <ingresoMensual>0.00</ingresoMensual> 
            <email/> 
            <ocupacion/> 
            <hijos>0</hijos> 
            <documento> 
               <tipoDocumento>LIBRE</tipoDocumento> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <nombreTipoDocumento>LIBRETA CIVICA</nombreTipoDocumento> 
               <nroDocumento>5832073</nroDocumento> 
               <pais>ARGENTINA, REPUBLICA</pais> 
            </documento> 
            <nacionalidad/> 
            <celular/> 
            <antiguedadLaboral>0</antiguedadLaboral> 
            <nivelEducativo/> 
            <nombres>Probando Pruebas</nombres> 
            <otrosIngresos>0.00</otrosIngresos> 
         </sCTPersona> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2181</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerPerfil</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-02-13</Fecha> 
            <Hora>16:02:01</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerPerfilResponse> 
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
    "sCTPersona": { 
        "profesion": "", 
        "estadoCivil": "Soltero/a", 
        "domicilio": { 
            "localidad": "", 
            "departamento": "BUENOS AIRES", 
            "direccion": "18 de Julio 25", 
            "pais": "ARGENTINA, REPUBLICA", 
            "barrio": "", 
            "propietario": "", 
            "longitud": 0, 
            "zona": "", 
            "codPostal": "", 
            "latitud": 0 
        }, 
        "fechaNacimiento": "1901-01-01", 
        "apellidos": "Bengoechea Morena", 
        "personaUId": 0, 
        "sexo": "", 
        "actividad": "", 
        "telefono": "", 
        "ingresoMensual": 0, 
        "email": "", 
        "ocupacion": "", 
        "hijos": 0, 
        "documento": { 
            "tipoDocumento": "D.N.I", 
            "fechaVencimiento": "0000-00-00", 
            "nombreTipoDocumento": "D.N.I.", 
            "nroDocumento": "10001848", 
            "pais": "ARGENTINA, REPUBLICA" 
        }, 
        "nacionalidad": "", 
        "celular": "", 
        "antiguedadLaboral": 0, 
        "nivelEducativo": "", 
        "nombres": "Pablo Javier", 
        "otrosIngresos": 0 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 2207, 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerPerfil", 
        "Requerimiento": "", 
        "Fecha": "2019-02-13", 
        "Hora": "16:34:42", 
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
sCTPersona | sCTPersona | Datos de cliente. 

Los campos del tipo de dato estructurado sCTPersona son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
profesion | String | Profesión. 
estadoCivil | String | Estado civil. 
domicilio | sCTDomicilio | Datos de domicilio. 
fechaNacimiento | Date | Fecha de nacimiento. 
apellidos | String | Apellidos. 
personaUId | Long | Identificador único de persona. 
sexo | String | Sexo (M/F). 
actividad | String | Actividad laboral. 
telefono | String | Teléfono. 
ingresoMensual | Double | Ingreso mensual. 
email | String | Corre electrónico. 
ocupacion | String | Ocupación de la persona. 
hijos | Byte | Cantidad de hijos. 
documento | sCTDocumento | Datos del documento. 
nacionalidad | String | Nacionalidad. 
celular | String | Celular. 
antiguedadLaboral | Short | Antigüedad laboral. 
nivelEducativo | String | Nivel de educación. 
nombres | String | Nombres. 
otrosIngresos | Double | Otros ingresos. 

Los campos del tipo de dato estructurado sCTDomicilio son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
localidad | String | Localidad del domicilio. 
departamento | String | Departamento del domicilio. 
direccion | String | Dirección. 
pais | String | País del domicilio. 
barrio | String | Barrio. 
propietario | String | Propietario del domicilio. 
longitud | Double | Longitud del domicilio. 
zona | String | Zona del domicilio. 
codPostal | String | Código postal. 
latitud | Double | Latitud del domicilio. 

Los campos del tipo de dato estructurado sCTDocumento son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
tipoDocumento | String | Tipo del documento. 
fechaVencimiento | Date | Fecha de vencimiento del documento. 
nombreTipoDocumento | String | Nombre del tipo de documento. 
nroDocumento | String | Número de documento. 
pais | String | País del documento. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recuperó la cuenta para el Identificador. 

 
