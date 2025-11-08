<!DOCTYPE html>
<html>
<head><title>Update Lion</title></head>
<body>
<h1>Update Lion</h1>
<form action="/lions/update" method="post">
    <input type="hidden" name="id" value="${lion.id}"/>
    Name: <input type="text" name="name" value="${lion.name}"/><br/>
    Age: <input type="number" name="age" value="${lion.age}"/><br/>
    Gender: <input type="text" name="gender" value="${lion.gender}"/><br/>
    Description: <textarea name="description">${lion.description}</textarea><br/>
    <input type="submit" value="Update"/>
</form>
<a href="/lions/all">Back to List</a>
</body>
</html>
