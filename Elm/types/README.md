# Types

One of the major benefits to Elm is that users do not see runtime errors in practice. This is only possible because the Elm compiler can analyze your source very quickly to see how the values flow through your program.

If a value can ever be used in an invalid way, the compiler tells you about it with a friendly error message. This is called type _inference_. The compiler figures out what type of values flow in and out of all your functions.

## Example of Type Inference

The following code defines a function which will extract a persons full name as a string

```elm
toFullName person =
  person.firstName ++ " " ++ person.lastName

fullName =
  toFullName { fistName = "George", lastName = "Hamon" }
```

Like in JS or Python we can just write the code with no extra clutter.

However there seems to be an error within our code. In JavaScript the above function would've simply spit out `undefined Hamon` not even an error in our case. Hopefully then on of your users catches it and reports it back to you.

With the Elm compiler it looks at the source code and will tell you something like this:

```
-- TYPE MISMATCH ---------------------------------------------------------------

The argument to function `toFullName` is causing a mismatch.

6│   toFullName { fistName = "George", lastName = "Hamon" }
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Function `toFullName` is expecting the argument to be:

    { …, firstName : … }

But it is:

    { …, fistName : … }

Hint: I compared the record fields and found some potential typos.

    firstName <-> fistName
```

The compiler sees that someone wrote `fist` instead of `first` so it got the wrong type of argument.
