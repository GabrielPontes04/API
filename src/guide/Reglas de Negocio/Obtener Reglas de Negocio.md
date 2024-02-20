# Obtener Reglas de Negocio 

Método para obtener un listado de las reglas de negocio. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTReglasNegocio.ObtenerReglasNegocio | RBTPGR53 | Global 

> Ejemplo de invocación al servicio de Obtener Reglas de Negocio: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTReglasNegocio.ObtenerReglasNegocio> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>86b12d9cbaCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
      </bts:BTReglasNegocio.ObtenerReglasNegocio> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?ObtenerReglasNegocio' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
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
      <BTReglasNegocio.ObtenerReglasNegocioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>86b12d9cbaCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtReglasNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>Tipo de Cambio</descripcion> 
               <reglaId>1</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>Botón Datos Pep's</descripcion> 
               <reglaId>4</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>FLUJO CAJA - Valida Maepo</descripcion> 
               <reglaId>50</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>Otorgamiento de Crédit. Nuevo</descripcion> 
               <reglaId>58</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>Determinación MODEVAL</descripcion> 
               <reglaId>100</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>v499</descripcion> 
               <reglaId>499</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>HSNGCPF1- Vis Campos 400_10_3</descripcion> 
               <reglaId>500</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>HSNGCPF1- Vis Campos 400_10_3</descripcion> 
               <reglaId>501</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>DECIS PASA POR FACTA</descripcion> 
               <reglaId>502</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>DECISIÓN SOLICITUD</descripcion> 
               <reglaId>600</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>DECISIÓN PROPUESTA</descripcion> 
               <reglaId>601</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>DECISIÓN APROBACION</descripcion> 
               <reglaId>602</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>DECISIÓN DESEMBOLSO</descripcion> 
               <reglaId>603</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>CAMBIOS - RIESGO B (PRINCIPAL)</descripcion> 
               <reglaId>641</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>CAMBIOS - RIESGO B (M.FUERTE)</descripcion> 
               <reglaId>642</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>CAMBIOS - RIESGO B (M.DEBIL)</descripcion> 
               <reglaId>643</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>TITULOS - RIESGO B (PRINCIPAL)</descripcion> 
               <reglaId>651</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>TITULOS - B (PAISES1, PUBLICO)</descripcion> 
               <reglaId>652</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>TITULOS - B (PAISES1, PRIVADO)</descripcion> 
               <reglaId>653</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>TITULOS - B (PAISES2, PUBLICO)</descripcion> 
               <reglaId>654</reglaId> 
            </SdtsBTReglaNegocio> 
            <SdtsBTReglaNegocio> 
               <descripcion>TITULOS - B (PAISES2, PRIVADO)</descripcion> 
               <reglaId>655</reglaId> 
            </SdtsBTReglaNegocio> 
         </sdtReglasNegocio> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>43439</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTReglasNegocio.ObtenerReglasNegocio</Servicio> 
            <Fecha>2022-06-02</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>07:56:48</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTReglasNegocio.ObtenerReglasNegocioResponse> 
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
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "sdtReglasNegocio": { 
         "SdtsBTReglaNegocio": [ 
         { 
            "descripcion": "Tipo de Cambio", 
            "reglaId": "1" 
         }, 
         { 
            "descripcion": "Botón Datos Pep's", 
            "reglaId": "4" 
         }, 
         { 
            "descripcion": "FLUJO CAJA - Valida Maepo", 
            "reglaId": "50" 
         }, 
         { 
            "descripcion": "Otorgamiento de Crédit. Nuevo", 
            "reglaId": "58" 
         }, 
         { 
            "descripcion": "Determinación MODEVAL", 
            "reglaId": "100" 
         }, 
         { 
            "descripcion": "v499", 
            "reglaId": "499" 
         }, 
         { 
            "descripcion": "HSNGCPF1- Vis Campos 400_10_3", 
            "reglaId": "500" 
         }, 
         { 
            "descripcion": "HSNGCPF1- Vis Campos 400_10_3", 
            "reglaId": "501" 
         }, 
         { 
            "descripcion": "DECIS PASA POR FACTA", 
            "reglaId": "502" 
         }, 
         { 
            "descripcion": "DECISIÓN SOLICITUD", 
            "reglaId": "600" 
         }, 
         { 
            "descripcion": "DECISIÓN PROPUESTA", 
            "reglaId": "601" 
         }, 
         { 
            "descripcion": "DECISIÓN APROBACION", 
            "reglaId": "602" 
         }, 
         { 
            "descripcion": "DECISIÓN DESEMBOLSO", 
            "reglaId": "603" 
         }, 
         { 
            "descripcion": "CAMBIOS - RIESGO B (PRINCIPAL)", 
            "reglaId": "641" 
         }, 
         { 
            "descripcion": "CAMBIOS - RIESGO B (M.FUERTE)", 
            "reglaId": "642" 
         }, 
         { 
            "descripcion": "CAMBIOS - RIESGO B (M.DEBIL)", 
            "reglaId": "643" 
         }, 
         { 
            "descripcion": "TITULOS - RIESGO B (PRINCIPAL)", 
            "reglaId": "651" 
         }, 
         { 
            "descripcion": "TITULOS - B (PAISES1, PUBLICO)", 
            "reglaId": "652" 
         }, 
         { 
            "descripcion": "TITULOS - B (PAISES1, PRIVADO)", 
            "reglaId": "653" 
         }, 
         { 
            "descripcion": "TITULOS - B (PAISES2, PUBLICO)", 
            "reglaId": "654" 
         }, 
         { 
            "descripcion": "TITULOS - B (PAISES2, PRIVADO)", 
            "reglaId": "655" 
         } 
         ] 
      }, 
      "Erroresnegocio": { 
      }, 
      "Btoutreq": { 
         "Numero": "43439", 
         "Estado": "OK", 
         "Servicio": "BTReglasNegocio.ObtenerReglasNegocio", 
         "Fecha": "2022-06-02", 
         "Requerimiento": "1", 
         "Hora": "07:56:48", 
         "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

No aplica. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtReglasNegocio | sBTReglaNegocio | Listado de reglas de negocio. 

Los campos del tipo de dato estructurado sBTReglaNegocio son los siguientes: 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
reglaId | Long | Código de regla de negocio. 
descripcion | String | Descripción de regla de negocio. 

### Errores 

No aplica. 

 
