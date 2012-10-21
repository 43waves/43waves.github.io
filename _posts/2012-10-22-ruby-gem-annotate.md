---
layout: post
title: Ruby Gem - Annotate
---

Annotate adds schema information into model file.

We will annotate schema information for User model in example below.

Open a terminal, at project directory, run:

{% highlight bash %}
  $ bundle exec annotate User
{% endhighlight %}

Schema information is added on top of `/<project>/app/model/User.rb`:

{% highlight ruby %}
  # == Schema Information
  #
  # Table name: users
  #
  #  id              :integer          not null, primary key
  #  name            :string(255)
  #  email           :string(255)
  #  created_at      :datetime         not null
  #  updated_at      :datetime         not null
  #  password_digest :string(255)
  #  remember_token  :string(255)
  #  admin           :boolean          default(FALSE)
{% endhighlight %}

Every time the model changed, rerun the command to update the new schema information.
