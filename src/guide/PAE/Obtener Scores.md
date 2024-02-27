# Obtener Scores 

Método para obtener los scores de los modelos de evaluación. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPAE.ObtenerScores | RBTPG511 | Institucional 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
modeloEvaluacionId | Int | Código de modelo de evaluación. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtScoresPAE | sBTScorePAE | Listado de scores de un modelo PAE. 

Los campos del tipo de dato estructurado sBTScorePAE son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigoModelo | Numerico | Código de modelo. 
codigoItem | Numerico | Código de item. 
correlativo | Numerico | Correlativo. 
desdeNumerico | Numerico | Número desde. 
desdeCaracter | String | Caracter desde. 
desdeFecha | Date | Fecha desde. 
hastaNumerico | Numerico | Número hasta. 
hastaCaracter | String | Caracter hasta. 
hastaFecha | Date | Fecha hasta. 
valorScoreRango | Numerico | Rango del valor score. 
valorPolitica | String | Valor de política para el rango (S/N). 
idPolitica | Numerico | Codigo de política. 
mensajeIncumPolitica | String | Mensaje de política incumplida. 
tipoRestriccion| String | Tipo de restricción por defecto. ('I'= Informativa; 'A'= Alerta; 'B'= Bloqueante; 'E'= Bloqueante con Excepción;). 

### Errores 

No aplica. 

> Ejemplo de invocación al método Obtener Scores: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPAE.ObtenerScores> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>FP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>3789c5608bCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
         <bts:modeloEvaluacionId>101</bts:modeloEvaluacionId> 
      </bts:BTPAE.ObtenerScores> 
   </soapenv:Body> 
</soapenv:Envelope> 

``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPAE_v1?ObtenerScores \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
  "Btinreq": { 
      "Requerimiento": 13, 
      "Device": "FP", 
      "Canal": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Token": "3789c5608bCD285A89A23FBE" 
  }, 
  "modeloEvaluacionId": 101 
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
      <BTPAE.ObtenerScoresResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>FP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>3789c5608bCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtScoresPAE> 
            <sBTScorePAE> 
               <valorScoreRango>-0.409</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>0</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>25</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>1</correlativo> 
               <desdeCaracter/> 
               <codigoItem>1</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.00</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>26</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>45</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>2</correlativo> 
               <desdeCaracter/> 
               <codigoItem>1</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.314</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>46</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>99</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>3</correlativo> 
               <desdeCaracter/> 
               <codigoItem>1</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.349</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>0</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>0</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>1</correlativo> 
               <desdeCaracter>M</desdeCaracter> 
               <codigoItem>2</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.255</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>0</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>0</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>1</correlativo> 
               <desdeCaracter>2</desdeCaracter> 
               <codigoItem>3</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter>2</hastaCaracter> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.452</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>1</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>0</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>1</correlativo> 
               <desdeCaracter/> 
               <codigoItem>12</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.452</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>3</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>0</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>2</correlativo> 
               <desdeCaracter/> 
               <codigoItem>12</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.206</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>0</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>0</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>1</correlativo> 
               <desdeCaracter>P</desdeCaracter> 
               <codigoItem>63</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter>P</hastaCaracter> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.00</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>0</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>0</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>2</correlativo> 
               <desdeCaracter>A</desdeCaracter> 
               <codigoItem>63</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter>A</hastaCaracter> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>-0.288</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>0</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>0</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>3</correlativo> 
               <desdeCaracter>F</desdeCaracter> 
               <codigoItem>63</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter>F</hastaCaracter> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>-0.466</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>0</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>1</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>1</correlativo> 
               <desdeCaracter/> 
               <codigoItem>64</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.00</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>2</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>3</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>2</correlativo> 
               <desdeCaracter/> 
               <codigoItem>64</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.406</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>4</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>99</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>3</correlativo> 
               <desdeCaracter/> 
               <codigoItem>64</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>-0.399</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>0</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>2900</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>1</correlativo> 
               <desdeCaracter/> 
               <codigoItem>65</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.45</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>100</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>800</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>1</correlativo> 
               <desdeCaracter/> 
               <codigoItem>66</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
            <sBTScorePAE> 
               <valorScoreRango>0.40</valorScoreRango> 
               <tipoRestriccion/> 
               <idPolitica>0</idPolitica> 
               <codigoModelo>101</codigoModelo> 
               <desdeNumerico>200000</desdeNumerico> 
               <hastaFecha>0001-01-01</hastaFecha> 
               <hastaNumerico>600000</hastaNumerico> 
               <valorPolitica/> 
               <mensajeIncumPolitica/> 
               <correlativo>1</correlativo> 
               <desdeCaracter/> 
               <codigoItem>67</codigoItem> 
               <desdeFecha>0001-01-01</desdeFecha> 
               <hastaCaracter/> 
            </sBTScorePAE> 
         </sdtScoresPAE> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>31107</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPAE.ObtenerScores</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>12:32:04</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPAE.ObtenerScoresResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
  "Envelope": { 
    "Body": { 
      "BTPAE.ObtenerScoresResponse": { 
        "Btinreq": { 
          "Device": "FP", 
          "Usuario": "INSTALADOR", 
          "Requerimiento": 1, 
          "Canal": "BTDIGITAL", 
          "Token": "3789c5608bCD285A89A23FBE" 
        }, 
        "sdtScoresPAE": { 
          "sBTScorePAE": [ 
            { 
              "valorScoreRango": -0.409, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 0, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 25, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 1, 
              "desdeCaracter": "", 
              "codigoItem": 1, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": 0, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 26, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 45, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 2, 
              "desdeCaracter": "", 
              "codigoItem": 1, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": 0.314, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 46, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 99, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 3, 
              "desdeCaracter": "", 
              "codigoItem": 1, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": 0.349, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 0, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 0, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 1, 
              "desdeCaracter": "M", 
              "codigoItem": 2, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": 0.255, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 0, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 0, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 1, 
              "desdeCaracter": 2, 
              "codigoItem": 3, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": 2 
            }, 
            { 
              "valorScoreRango": 0.452, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 1, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 0, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 1, 
              "desdeCaracter": "", 
              "codigoItem": 12, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": 0.452, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 3, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 0, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 2, 
              "desdeCaracter": "", 
              "codigoItem": 12, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": 0.206, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 0, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 0, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 1, 
              "desdeCaracter": "P", 
              "codigoItem": 63, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "P" 
            }, 
            { 
              "valorScoreRango": 0, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 0, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 0, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 2, 
              "desdeCaracter": "A", 
              "codigoItem": 63, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "A" 
            }, 
            { 
              "valorScoreRango": -0.288, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 0, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 0, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 3, 
              "desdeCaracter": "F", 
              "codigoItem": 63, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "F" 
            }, 
            { 
              "valorScoreRango": -0.466, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 0, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 1, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 1, 
              "desdeCaracter": "", 
              "codigoItem": 64, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": 0, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 2, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 3, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 2, 
              "desdeCaracter": "", 
              "codigoItem": 64, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": 0.406, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 4, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 99, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 3, 
              "desdeCaracter": "", 
              "codigoItem": 64, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": -0.399, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 0, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 2900, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 1, 
              "desdeCaracter": "", 
              "codigoItem": 65, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": 0.45, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 100, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 800, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 1, 
              "desdeCaracter": "", 
              "codigoItem": 66, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            }, 
            { 
              "valorScoreRango": 0.4, 
              "tipoRestriccion": "", 
              "idPolitica": 0, 
              "codigoModelo": 101, 
              "desdeNumerico": 200000, 
              "hastaFecha": "0001-01-01", 
              "hastaNumerico": 600000, 
              "valorPolitica": "", 
              "mensajeIncumPolitica": "", 
              "correlativo": 1, 
              "desdeCaracter": "", 
              "codigoItem": 67, 
              "desdeFecha": "0001-01-01", 
              "hastaCaracter": "" 
            } 
          ] 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Numero": 31107, 
          "Estado": "OK", 
          "Servicio": "BTPAE.ObtenerScores", 
          "Requerimiento": 1, 
          "Fecha": "2022-11-29", 
          "Hora": "12:32:04", 
          "Canal": "BTDIGITAL" 
        } 
      } 
    } 
  } 
} 

``` 
</code-block> 
</code-group> 


 
