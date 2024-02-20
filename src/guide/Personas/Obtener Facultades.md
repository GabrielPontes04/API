# Obtener Facultades 

Método para obtener un listado de las facultades de una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerFacultades | RBTPG453 | Global 

> Ejemplo de invocación al método Obtener Facultades: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerFacultades> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>5f7c5e6a6f99865B3A2E76CF</bts:Token> 
         </bts:Btinreq> 
         <bts:personasUId>183</bts:personasUId> 
      </bts:BTPersonas.ObtenerFacultades> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerDatos' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Requerimiento": 0, 
          "Canal": "BTDIGITAL", 
          "Device": "GZ", 
          "Usuario": "INSTALADOR", 
          "Token": "5f7c5e6a6f99865B3A2E76CF" 
        }, 
        "personaUId": 183 
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
      <BTPersonas.ObtenerFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>Instalador</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>5f7c5e6a6f99865B3A2E76CF</Token> 
         </Btinreq> 
         <sdtFacultades> 
            <facultadesOperacion> 
               <SdtsBTFacultadPersonaOperacion> 
                  <producto> 
                     <papel>$</papel> 
                     <moneda>$</moneda> 
                     <productoUId>41</productoUId> 
                     <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                  </producto> 
                  <descripcion>Retiro de cuentas vista</descripcion> 
                  <operacionUId>1011</operacionUId> 
                  <tipo>Persona</tipo> 
                  <potestad>Titular</potestad> 
                  <grupo> 
                     <numero>1</numero> 
                     <monto>0.00</monto> 
                     <moneda>$</moneda> 
                     <papel>$</papel> 
                     <vigenciaHasta/> 
                     <codigoMoneda>0</codigoMoneda> 
                     <vigenciaDesde>2018-11-05</vigenciaDesde> 
                     <codigoPapel>0</codigoPapel> 
                  </grupo> 
                  <codigo>2</codigo> 
                  <categoria>-</categoria> 
               </SdtsBTFacultadPersonaOperacion> 
            </facultadesOperacion> 
            <facultadesCliente> 
               <SdtsBTFacultadPersonaCliente> 
                  <clienteUId>340</clienteUId> 
                  <descripcion>Firma de Cheques</descripcion> 
                  <potestad>Titular</potestad> 
                  <tipo>Categoría</tipo> 
                  <grupo> 
                     <numero>1</numero> 
                     <monto>2000000.00</monto> 
                     <moneda>$</moneda> 
                     <papel>$</papel> 
                     <vigenciaHasta>2022-09-23</vigenciaHasta> 
                     <codigoMoneda>0</codigoMoneda> 
                     <vigenciaDesde>2018-12-10</vigenciaDesde> 
                     <codigoPapel>0</codigoPapel> 
                  </grupo> 
                  <codigo>4</codigo> 
                  <categoria>A</categoria> 
               </SdtsBTFacultadPersonaCliente> 
            </facultadesCliente> 
         </sdtFacultades> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2957</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerFacultades</Servicio> 
            <Fecha>2023-03-27</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>11:40:36</Hora> 
         </Btoutreq> 
      </BTPersonas.ObtenerFacultadesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Device": "GZ", 
          "Usuario": "Instalador", 
          "Requerimiento": "0", 
          "Canal": "BTDIGITAL", 
          "Token": "5f7c5e6a6f99865B3A2E76CF" 
        }, 
        "sdtFacultades": { 
          "facultadesOperacion": { 
            "SdtsBTFacultadPersonaOperacion": { 
              "producto": { 
                "papel": "$", 
                "moneda": "$", 
                "productoUId": "41", 
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física" 
              }, 
              "descripcion": "Retiro de cuentas vista", 
              "operacionUId": "1011", 
              "tipo": "Persona", 
              "potestad": "Titular", 
              "grupo": { 
                "numero": "1", 
                "monto": "0.00", 
                "moneda": "$", 
                "papel": "$", 
                "vigenciaHasta": { 
                  "-self-closing": "true" 
                }, 
                "codigoMoneda": "0", 
                "vigenciaDesde": "2018-11-05", 
                "codigoPapel": "0" 
              }, 
              "codigo": "2", 
              "categoria": "-" 
            } 
          }, 
          "facultadesCliente": { 
            "SdtsBTFacultadPersonaCliente": { 
              "clienteUId": "340", 
              "descripcion": "Firma de Cheques", 
              "potestad": "Titular", 
              "tipo": "Categoría", 
              "grupo": { 
                "numero": "1", 
                "monto": "2000000.00", 
                "moneda": "$", 
                "papel": "$", 
                "vigenciaHasta": "2022-09-23", 
                "codigoMoneda": "0", 
                "vigenciaDesde": "2018-12-10", 
                "codigoPapel": "0" 
              }, 
              "codigo": "4", 
              "categoria": "A" 
            } 
          } 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTPersonas.ObtenerFacultades", 
          "Fecha": "2022-11-29", 
          "Hora": "10:23:37", 
          "Requerimiento": 1, 
          "Numero": 486, 
          "Estado": "OK" 
        } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personasUId | Long | Identificador único de persona. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtFacultades | sBTFacultadesPersona | Listado de datos de facultades. 

Los campos del tipo de dato estructurado sBTFacultadesPersona son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
sBTFacultadesCliente | sBTFacultadPersonaCliente | Listado de datos de cliente. 
sBTFacultadesOperacion | sBTFacultadPersonaOperacion | Listado de datos de operación. 

Los campos del tipo de dato estructurado sBTFacultadPersonaCliente son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único del cliente. 
codigo | Short | Código. 
descripcion | String | Descripción. 
tipo | String | Tipo. 
categoria | String | Categoria. 
potestad | String | Potestad. 
grupo | sBTFacultadGrupoPersona | Listado de grupos de la facultad. 

Los campos del tipo de dato estructurado sBTFacultadPersonaOperacion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de la operación. 
producto | sbtProducto | Datos de producto. 
codigo | Short | Código. 
descripcion | String | Descripción. 
tipo | String | Tipo. 
categoria | String | Categoria. 
potestad | String | Potestad. 
grupo | sBTFacultadGrupoPersona | Listado de grupos de la facultad. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de la moneda. 
papel | String | Símbolo del papel. 

Los campos del tipo de dato estructurado sBTFacultadGrupoPersona son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
numero | Short | Número de grupo. 
vigenciaDesde | Date | Fecha de vigencia desde. 
vigenciaHasta | Date | Fecha de vigencia hasta. 
monto | Decimal | Monto. 
codigoMoneda | Int | Código de moneda. 
moneda | String | Moneda. 
codigoPapel | Int | Código de papel. 
papel | String | Papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador único de persona. 
30006 | No se recuperó la persona  para el Identificador: [Número de identificador]. 

 
