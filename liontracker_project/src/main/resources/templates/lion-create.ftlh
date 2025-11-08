<!DOCTYPE html>
<html>
<head><title>Create Lion</title></head>
<body>
<h1>Create a New Lion</h1>
<form action="/lions/create" method="post">
    Name: <input type="text" name="name"/><br/>
    Age: <input type="number" name="age"/><br/>
    Gender: <input type="text" name="gender"/><br/>
    Description: <textarea name="description"></textarea><br/>
    <input type="submit" value="Create"/>
</form>
<a href="/lions/all">Back to List</a>
</body>
</html>
