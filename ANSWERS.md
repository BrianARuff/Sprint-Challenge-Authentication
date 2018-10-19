<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
  a. Sessions store data temporarily until the browser is closed. Some data may not need to persist for long periods of time, so the information in them does not persist the same way localStorage or cookies work.

2. What does bcrypt do to help us store passwords in a secure manner.
  a. Bcrypyt can take in a string, and then encrypt it into a salt and hash with a specified number of rounds.

3. What does bcrypt do to slow down attackers?
  a. Since every round adds time to generate the hash for the password, it prevents brute-force attacks by slowing down the process entirely.

4. What are the three parts of the JSON Web Token?
  a. header, payload, signature.
    a. header - contains the type and algorithm to be used.
    b. payload - carry custom data and information about the token such as expiration and issued at data.
    c. signature - the signature is a hash of the header, payload and the secret for the JWT.