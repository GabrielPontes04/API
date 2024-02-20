# Obtener Facultades 

Método para obtener una lista de las facultades de una cuenta vista. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.ObtenerFacultades | RBTPG451 | Global 

> Ejemplo de invocación al método Obtener Facultades: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerFacultades> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>papa</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>BC79E967434CDFE2512C069E</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>1138</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerFacultades> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerDatos' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Requerimiento": 0, 
          "Canal": "BTDIGITAL", 
          "Device": "papa", 
          "Usuario": "INSTALADOR", 
          "Token": "BC79E967434CDFE2512C069E" 
        }, 
        "operacionUId": 1138 
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
      <BTCuentasVista.ObtenerFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>30F74741A02C318CEFD55684</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <sdtFacultades> 
            <SdtsBTFacultad> 
                <grupos></grupos> 
                <firmantes></firmantes> 
                <descripcion>Firma de Cheques</descripcion> 
                <tipo>Categoría</tipo> 
                <codigo>1</codigo> 
            </SdtsBTFacultad> 
            <SdtsBTFacultad> 
                <grupos> 
                    <SdtsBTFacultadGrupo> 
                        <moneda>$</moneda> 
                        <codigoMoneda>0</codigoMoneda> 
                        <vigenciaHasta>2022-10-04</vigenciaHasta> 
                        <monto>99999990.00</monto> 
                        <habilitado>S</habilitado> 
                        <firmantes> 
                            <SdtsBTFacultadFirmante> 
                                <potestad>Titular</potestad> 
                                <personaUId>161</personaUId> 
                                <nombre>AZQUEZ SZENTANDRASI LEJANDRO</nombre> 
                                <categoria/> 
                            </SdtsBTFacultadFirmante> 
                        </firmantes> 
                        <codigoPapel>0</codigoPapel> 
                        <papel>$</papel> 
                        <numero>1</numero> 
                        <vigenciaDesde>2020-01-02</vigenciaDesde> 
                    </SdtsBTFacultadGrupo> 
                </grupos> 
                <firmantes></firmantes> 
                <descripcion>Retiro de cuentas vista</descripcion> 
                <tipo>Persona</tipo> 
                <codigo>2</codigo> 
            </SdtsBTFacultad> 
        </sdtFacultades> 
        <sdtFirmantes> 
            <SdtsBTFacultadFirmante> 
                <potestad>Titular</potestad> 
                <personaUId>161</personaUId> 
                <nombre>AZQUEZ SZENTANDRASI LEJANDRO</nombre> 
                <categoria/> 
            </SdtsBTFacultadFirmante> 
        </sdtFirmantes> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasVista.ObtenerFacultades</Servicio> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>10:23:37</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>486</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerFacultadesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "30F74741A02C318CEFD55684", 
          "Device": "GL" 
        }, 
        "sdtFacultades": { 
          "SdtsBTFacultad": [ 
            { 
              "grupos": "", 
              "firmantes": "", 
              "descripcion": "Firma de Cheques", 
              "tipo": "Categoría", 
              "codigo": 1 
            }, 
            { 
              "grupos": { 
                "SdtsBTFacultadGrupo": { 
                  "moneda": "$", 
                  "codigoMoneda": 0, 
                  "vigenciaHasta": "2022-10-04", 
                  "monto": 99999990, 
                  "habilitado": "S", 
                  "firmantes": { 
                    "SdtsBTFacultadFirmante": { 
                      "potestad": "Titular", 
                      "personaUId": 161, 
                      "nombre": "AZQUEZ SZENTANDRASI LEJANDRO", 
                      "categoria": "" 
                    } 
                  }, 
                  "codigoPapel": 0, 
                  "papel": "$", 
                  "numero": 1, 
                  "vigenciaDesde": "2020-01-02" 
                } 
              }, 
              "firmantes": "", 
              "descripcion": "Retiro de cuentas vista", 
              "tipo": "Persona", 
              "codigo": 2 
            } 
          ] 
        }, 
        "sdtFirmantes": { 
          "SdtsBTFacultadFirmante": { 
            "potestad": "Titular", 
            "personaUId": 161, 
            "nombre": "AZQUEZ SZENTANDRASI LEJANDRO", 
            "categoria": "" 
          } 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTCuentasVista.ObtenerFacultades", 
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
operacionUId | Long | Identificador único de operación. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtFacultades | sBTFacultades | Listado de datos de facultades. 
sdtFirmantes | sBTFacultadFirmantes | Listado de datos de firmantes. 

Los campos del tipo de dato estructurado sBTFacultades son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigo | Short | Código. 
descripcion | String | Descripción. 
tipo | String | Tipo. 
grupos | sBTFacultadGrupo | Listado de grupos de la facultad. 
firmantes | sBTFacultadFirmante | Listado de firmantes de la facultad. 

Los campos del tipo de dato estructurado sBTFacultadGrupo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
numero | Short | Número de grupo. 
habilitado | String | ¿Habilitado? (S/N). 
vigenciaDesde | Date | Fecha de vigencia desde. 
vigenciaHasta | Date | Fecha de vigencia hasta. 
codigoMoneda | Int | Código de moneda. 
moneda | String | Moneda. 
codigoPapel | Long | Código de papel. 
papel | String | Papel. 
monto | Long | Monto. 
firmantes | sBTFacultadFirmante | Listado de firmantes. 

Los campos del tipo de dato estructurado sBTFacultadFirmante son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | long | Identificador único de persona. 
nombre | String | Nombre. 
categoria | String | Categoría. 
potestad | String | Potestad. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador único de operación. 
30002 | No se recuperó la operación para el Identificador: [Número de identificador]. 
30003 | La operación ingresada no corresponde a una cuenta corriente / cuenta de ahorro. 


 
