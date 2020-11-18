// One day, Spot was playing with the Munster family's home computer, and
// he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// After writing this function, he typed the following code:

messWithDemographics(munsters);
console.log(munsters);

// Before Grandpa could stop him, Spot hit the Enter key with his tail.
// Did the family's data get ransacked? Why or why not?


/////////    ANSWER   \\\\\\\\\
// The family data didn't get ransacked. Both Object.values and forEach are
// non-destructive and return new arrays.

/*I'm wrong...hmm
Object.values() returns an array whose elements are the enumerable property
values found on the object. The ordering of the properties is the same as that
given by looping over the property values of the object manually.

So...Object.values() is destructive because it only does a shallow copy. Shallow
copies make a new objec/array at the 'highest' level of the object...but if
there are any nested objects/arrays, then those conintue to point to the
original nested arrays as the 'original' object/array copied from.
https://launchschool.com/posts/113aa56a*/