# Obtener Datos 

Método para obtener datos de un cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ObtenerDatos | RBTPG441 | Global 

> Ejemplo de invocación al método Obtener Datos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCliente.ObtenerDatos> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>papa</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>8A7B3C4E6F4A275BC67245E5</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUID>10010</bts:clienteUID> 
      </bts:BTCliente.ObtenerDatos> 
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
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
		"clienteUID": 10010 
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
      <BTPrueba.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>0</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>50F9EC89DBFA778E70454A66</Token> 
            <Device>papa</Device> 
         </Btinreq> 
         <sdtDatosCuentaCliente> 
            <empresaId>1</empresaId> 
            <cuentaBT>27</cuentaBT> 
            <fechaAlta>2015-12-23</fechaAlta> 
            <nombre>PRANKA ERIKA</nombre> 
            <sucursalId>1000</sucursalId> 
            <sucursal>Casa Matriz</sucursal> 
            <asesorId>0</asesorId> 
            <asesor/> 
            <ejecutivoId>1</ejecutivoId> 
            <ejecutivo>Instalador</ejecutivo> 
            <clasificacionInternaId>43</clasificacionInternaId> 
            <clasificacionInterna>Venta. Art. x menor Ferreteria</clasificacionInterna> 
            <fechaVtoClasificacion>2018-12-14</fechaVtoClasificacion> 
            <segmentoId>1</segmentoId> 
            <segmento>Independiente</segmento> 
            <actividadLaboralId>14100</actividadLaboralId> 
            <actividadLaboral>14100 Extracción de piedra, arena y arcilla</actividadLaboral> 
            <sectorId>1</sectorId> 
            <sector>Privado no Financiero</sector> 
            <residente>S</residente> 
            <empleado>N</empleado> 
            <proveedor>N</proveedor> 
            <retenerCorrespondencia>N</retenerCorrespondencia> 
            <correoElectronico>ZEPORAYTE@HOTMAIL.COM.UY</correoElectronico> 
            <estado>Inhabilitada</estado> 
            <estadoId>3</estadoId> 
         </sdtDatosCuentaCliente> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrueba.ObtenerDatos</Servicio> 
            <Fecha>2022-11-15</Fecha> 
            <Hora>14:04:48</Hora> 
            <Requerimiento>0</Requerimiento> 
            <Numero>438</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrueba.ObtenerDatosResponse> 
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
    "sdtDatosCuentaCliente": { 
          "empresaId": 1, 
          "cuentaBT": 27, 
          "fechaAlta": "2015-12-23", 
          "nombre": "PRANKA ERIKA", 
          "sucursalId": 1000, 
          "sucursal": "Casa Matriz", 
          "asesorId": 0, 
          "asesor": "", 
          "ejecutivoId": 1, 
          "ejecutivo": "Instalador", 
          "clasificacionInternaId": 43, 
          "clasificacionInterna": "Venta. Art. x menor Ferreteria", 
          "fechaVtoClasificacion": "2018-12-14", 
          "segmentoId": 1, 
          "segmento": "Independiente", 
          "actividadLaboralId": 14100, 
          "actividadLaboral": "14100 Extracción de piedra, arena y arcilla", 
          "sectorId": 1, 
          "sector": "Privado no Financiero", 
          "residente": "S", 
          "empleado": "N", 
          "proveedor": "N", 
          "retenerCorrespondencia": "N", 
          "correoElectronico": "ZEPORAYTE@HOTMAIL.COM.UY", 
          "estado": "Inhabilitada", 
          "estadoId": 3 
        }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "401", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerDatos", 
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
clienteUId | Long | Identificador único de cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDatosCuentaCliente | sbtDatosCuentaCliente | Datos de la cuenta cliente. 

Los campos del tipo de dato estructurado sbtDatosCuentaCliente son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
empresaId | Int | Identificador de empresa. 
cuentaBT | Int  | Cuenta Bantotal. 
fechaAlta | Date | Fecha del alta. 
nombre | String  | Nombre del cliente. 
sucursalId | Int | Identificador de la sucursal. 
sucursal | String | Nombre de la sucursal. 
asesorId | Int  | Identificador del asesor. 
asesor | String | Nombre del asesor. 
ejecutivoId | Int | Identificador del ejecutivo. 
ejecutivo | String | Nombre del ejecutivo. 
clasificacionInternaId | Int | Identificador de clasificación interna. 
clasificacionInterna | String | Descripción de clasificación interna. 
fechaVtoClasificacion | Date | Fecha de vencimiento de clasificación. 
segmentoId | Int | Identificador de segmento. 
segmento | String | Descripción del segmento. 
actividadLaboralId | Int | Identificador de la actividad laboral. 
actividadLaboral | String | Descripción de la actividad laboral. 
sectorId | Int | Identificador de sector. 
sector | String | Descripción del sector. 
residente | String | ¿Es residente? (S/N). 
empleado | String | ¿Es empleado de la institución? (S/N). 
proveedor | String | ¿Es proveedor? (S/N). 
retenerCorrespondencia | String | ¿Retiene correspondencia? (S/N). 
correoElectronico | String | Correo electrónico. 
estado | String | Descripcion de estado.	 
estadoId | Int | Identificador de estado. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recuperó la cuenta para el Identificador de cliente: [Número de identificador]. 
40001 | No existe titular representativo para la cuenta. 
40099 | La cuenta fue dada de baja. 

 
