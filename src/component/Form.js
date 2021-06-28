import React from "react";

export const Form = () => {
  return (
    <div class="row">
      <div class="col-md-12">
        <form>
          <h1> Fill Up </h1>

          <fieldset>
           

            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name" />

            <label for="email">Email:</label>
            <input type="email" id="mail" name="user_email" />

            <label for="password">Phone Number:</label>
            <input type="text" id="password" name="user_password" />

            <label>Age:</label>
            <input
              type="radio"
              id="under_13"
              value="under_13"
              name="user_age"
            />
            <label for="under_13" class="light">
              Under 13
            </label>
            <input type="radio" id="over_13" value="over_13" name="user_age" />
            <label for="over_13" class="light">
              Over 13
            </label>
          </fieldset>
          <fieldset>
           

            <label for="bio">Describe:</label>
            <textarea id="bio" name="user_bio"></textarea>

            <label for="job">Category:</label>
            <select id="job" name="user_job">
              <optgroup label="Gadgets ">
                <option value="frontend_developer">TV</option>
                <option value="php_developer">iPhone</option>
                <option value="python_developer">Headphones</option>
                <option value="rails_developer">headphones</option>
                
              </optgroup>
              {/* <optgroup label="Mobile">
                <option value="android_developer">Android Developer</option>
                <option value="ios_developer">IOS Developer</option>
                <option value="mobile_designer">Mobile Designer</option>
              </optgroup>
              <optgroup label="Business">
                <option value="business_owner">Business Owner</option>
                <option value="freelancer">Freelancer</option>
              </optgroup> */}
            </select>

            {/* <label>Interests:</label>
            <input
              type="checkbox"
              id="development"
              value="interest_development"
              name="user_interest"
            />
            <label class="light" for="development">
              Development
            </label>
            <input
              type="checkbox"
              id="design"
              value="interest_design"
              name="user_interest"
            />
            <label class="light" for="design">
              Design
            </label>
            <input
              type="checkbox"
              id="business"
              value="interest_business"
              name="user_interest"
            />
            <label class="light" for="business">
              Business
            </label> */}
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
