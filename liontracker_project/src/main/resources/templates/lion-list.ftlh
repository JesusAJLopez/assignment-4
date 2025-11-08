<!DOCTYPE html>
<html>
<head><title>Lion List</title></head>
<body>
<h1>All Lions</h1>
<a href="/lions/create">Create New Lion</a>
<#list lionList as lion>
    <div style="margin:10px;padding:10px;border:1px solid #ccc;">
        <h2>${lion.name}</h2>
        <p>Age: ${lion.age}</p>
        <p>Gender: ${lion.gender}</p>
        <p>${lion.description}</p>
        <a href="/lions/${lion.id}">View Details</a> |
        <a href="/lions/update/${lion.id}">Edit</a> |
        <a href="/lions/delete/${lion.id}">Delete</a>
    </div>
</#list>
</body>
</html>
