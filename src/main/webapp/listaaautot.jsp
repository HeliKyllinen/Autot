<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<script src ="scripts/main.js"></script>
<title>Insert title here</title>
</head>
<body>
<table id="listaus">
	<thead>
		<tr>
			<th>Rekisterinumero</th>
			<th>Merkki</th>
			<th>Malli</th>
			<th>Vuosi</th>
			<th></th>
		</tr>
	</thead>
	<tbody id="tbody">
	</tbody>
</table>
<span id = "ilmo"></span>
<script>
//t�m� tiedosto on view, t��ll� ei koodata vaan l�hinn� n�ytet��n dataa
haeAutot();
</script>
</body>
</html>