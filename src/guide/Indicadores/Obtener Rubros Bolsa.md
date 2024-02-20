# Obtener Rubros Bolsa 

Método para obtener posibles rubros de bolsa ingresados en el sistema. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTIndicadores.ObtenerRubrosBolsa | RBTPG708 | Global 

> Ejemplo de invocación al servicio de Obtener Rubros Bolsa: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTIndicadores.ObtenerRubrosBolsa> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>?</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTIndicadores.ObtenerRubrosBolsa> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerRubrosBolsa' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
   "Btinreq": { 
      "Device": 1, 
      "Canal": "BTDIGITAL", 
      "Token": "959C2E0AEF210ABC0D8AA8F7", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "?" 
   } 
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
      <BTIndicadores.ObtenerRubrosBolsaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>?</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>959C2E0AEF210ABC0D8AA8F7</Token> 
         </Btinreq> 
         <sdtRubrosBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>0</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>9</ocurrencias> 
               <descripcion>Mon.Y Bill.En Empresa-Ventanilla</descripcion> 
               <subOperacion>400</subOperacion> 
               <rubro>101002001</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>0</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>119</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>3</ocurrencias> 
               <descripcion>Cuentas Corrientes P.Fis.Residentes</descripcion> 
               <subOperacion>51</subOperacion> 
               <rubro>140102001</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>1</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>176</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>2</ocurrencias> 
               <descripcion>Cuentas Corrientes P.Fis.Residentes</descripcion> 
               <subOperacion>1</subOperacion> 
               <rubro>140102001</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>1</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>176</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>2</ocurrencias> 
               <descripcion>Cuentas Corrientes P.Fis.Residentes</descripcion> 
               <subOperacion>2</subOperacion> 
               <rubro>140102001</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>1</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>59</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>2</ocurrencias> 
               <descripcion>Cuentas Corrientes P.Jur.Residentes</descripcion> 
               <subOperacion>1</subOperacion> 
               <rubro>140102002</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>2</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>166</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>2</ocurrencias> 
               <descripcion>BLOQUEO DE CUENTAS CORRIENTES</descripcion> 
               <subOperacion>3</subOperacion> 
               <rubro>902010150</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>0</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>166</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>2</ocurrencias> 
               <descripcion>CC. BLOQUEO DE CUENTAS CORRIENTES</descripcion> 
               <subOperacion>3</subOperacion> 
               <rubro>902020150</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>0</tipoOperacion> 
               <operacion>11</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
         </sdtRubrosBolsa> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11987</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTIndicadores.ObtenerRubrosBolsa</Servicio> 
            <Requerimiento>?</Requerimiento> 
            <Fecha>2023-05-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>13:55:55</Hora> 
         </Btoutreq> 
      </BTIndicadores.ObtenerRubrosBolsaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
  "Btinreq": { 
      "Device": 1, 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "?", 
      "Canal": "BTDIGITAL", 
      "Token": "959C2E0AEF210ABC0D8AA8F7" 
   }, 
   "sdtRubrosBolsa": { 
      "sBTRubroBolsa": [ 
      { 
         "moneda": 0, 
         "cuentaCliente": 0, 
         "signoMoneda": "$", 
         "ocurrencias": 9, 
         "descripcion": "Mon.Y Bill.En Empresa-Ventanilla", 
         "subOperacion": 400, 
         "rubro": 101002001, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 0, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 119, 
         "signoMoneda": "$", 
         "ocurrencias": 3, 
         "descripcion": "Cuentas Corrientes P.Fis.Residentes", 
         "subOperacion": 51, 
         "rubro": 140102001, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 1, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 176, 
         "signoMoneda": "$", 
         "ocurrencias": 2, 
         "descripcion": "Cuentas Corrientes P.Fis.Residentes", 
         "subOperacion": 1, 
         "rubro": 140102001, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 1, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 176, 
         "signoMoneda": "$", 
         "ocurrencias": 2, 
         "descripcion": "Cuentas Corrientes P.Fis.Residentes", 
         "subOperacion": 2, 
         "rubro": 140102001, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 1, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 59, 
         "signoMoneda": "$", 
         "ocurrencias": 2, 
         "descripcion": "Cuentas Corrientes P.Jur.Residentes", 
         "subOperacion": 1, 
         "rubro": 140102002, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 2, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 166, 
         "signoMoneda": "$", 
         "ocurrencias": 2, 
         "descripcion": "BLOQUEO DE CUENTAS CORRIENTES", 
         "subOperacion": 3, 
         "rubro": 902010150, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 0, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 166, 
         "signoMoneda": "$", 
         "ocurrencias": 2, 
         "descripcion": "CC. BLOQUEO DE CUENTAS CORRIENTES", 
         "subOperacion": 3, 
         "rubro": 902020150, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 0, 
         "operacion": 11, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      } 
      ] 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 11987, 
      "Estado": "OK", 
      "Servicio": "BTIndicadores.ObtenerRubrosBolsa", 
      "Requerimiento": "?", 
      "Fecha": "2023-05-22", 
      "Canal": "BTDIGITAL", 
      "Hora": "13:55:55" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

No aplica. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtRubrosBolsa | sBTRubroBolsa | Listado de rubros de bolsa. 

Los campos del tipo de dato estructurado sBTRubroBolsa son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
empresa | Int | Identificador de empresa. 
sucursal | Int | Identificador de sucursal. 
rubro | Int | Número de rubro. 
moneda | Int | Identificador de moneda. 
papel | Int | Identificador de papel. 
cuentaCliente | Int | Cuenta cliente. 
operacion | Int | Identificador de operación.      
subOperacion | Int | Identificador de sub operación.  
tipoOperacion | Int | Identificador de tipo de operación. 
signoMoneda | String | Signo de la moneda.   
nombreEmpresa | String | Nombre de la empresa. 
nombreSucursal | String | Nombre de la sucursal. 
nombrePapel | String | Nombre del papel.   
ocurrencias | Int | Ocurrencias.    
descripcion | String | Nombre del rubro.   

### Errores 

No aplica. 


 
