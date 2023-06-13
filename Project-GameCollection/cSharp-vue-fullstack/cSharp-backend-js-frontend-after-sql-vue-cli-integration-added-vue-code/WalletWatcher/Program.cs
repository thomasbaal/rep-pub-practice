using WalletWatcher;
using WalletWatcher.Model;

var builder = WebApplication.CreateBuilder(args);

// Add console logging
builder.Logging.AddConsole();
var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();


// 
const string connectionString =
    @"Data Source=(localdb)\MSSQLLocalDB;
    Initial Catalog=Contacts;
    Integrated Security=True;
    Connect Timeout=30";
    


// syntax app.Map???("/what/propertyName", data type to be mapped to)
app.MapGet("/people", () =>
{
    var personRepository = new PersonRepository(connectionString);
    return personRepository.ReadAll();

});

app.MapGet("/people/{id}", (Guid id) =>
{
    var personRepository = new PersonRepository(connectionString);
    return personRepository.ReadById(id);
});

app.MapDelete("/people/{id}", (Guid id) =>
{
    var personRepository = new PersonRepository(connectionString);
    personRepository.Delete(id);
});

app.MapPost("/people", (Person person) =>
{
    var personRepository = new PersonRepository(connectionString);
    personRepository.Create(person);
});


// NOTE !
// below receiving person.name (with lowercase "n") are mapped to "Person" object in c# that uses 
// PascalCase (uppercase first letter)
app.MapPut("/people/", (Person person) =>
{
    var personRepository = new PersonRepository(connectionString);
    personRepository.Update(person);
});

app.Run();












/*
 var people = new List<Person>
{
    new Person("Per", "per@mail.com"),
    new Person("Pål", "paal@mail.com"),
    new Person("Espen", "espen@mail.com"),
    new Person("Thomas", "thomas@mail.com"),
};

// syntax app.Map???("/what/propertyName", data type to be mapped to)
app.MapGet("/people", () =>
{
    return people;

});

app.MapGet("/people/{id}", (Guid id) =>
{
    return people.SingleOrDefault(p => p.Id == id);
});

app.MapDelete("/people/{id}", (Guid id) =>
{
    var person =  people.SingleOrDefault(p => p.Id == id);
    people.Remove(person);
});

app.MapPost("/people", (Person person) =>
{
    people.Add(person);
});


// NOTE !
// below receiving person.name (with lowercase "n") are mapped to "Person" object in c# that uses 
// PascalCase (uppercase first letter)
app.MapPut("/people/", (Person person) =>
{
    // change values of object properties.
    Console.WriteLine((person.Id));
    Console.WriteLine((person.Name));
    Console.WriteLine((person.Email));
    var currentPerson = people.SingleOrDefault(p => p.Id == person.Id);
    currentPerson.Name = person.Name;
    currentPerson.Email = person.Email;
});
 */

