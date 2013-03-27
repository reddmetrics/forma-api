# Developing

Some details about the FORMA API dev environment. Basically we create FORMA data views on Hadoop, upload them to S3 and Google Bigtable, and surface an API through Google App Engine frontend servers.

## Getting the code

Make sure you have Git installed, and then from the command line:

```bash
$ git clone git@github.com:reddmetrics/forma-api.git
```

That downloads the full code repository into a directory named `forma-api`.

## Dev server

The FORMA API rides on [Google App Engine](https://developers.google.com/appengine) Python 2.7 runtime, so you'll need to [download and install](https://developers.google.com/appengine/downloads) the latest Python SDK. 

It's useful adding the SDK to your PATH by adding the following line to your `~/.bashrc` or `~/.bash_profile`:

```bash
export PATH=$PATH:/your/path/to/google_appengine_sdk
```

App Engine ships with a local development server. At the command line:

```bash
$ cd forma-api
$ dev_appserver.py .
```

Boom! It's now running locally at [http://localhost:8080](http://localhost:8080) and you get an admin console at [http://localhost:8080/_ah/admin](http://localhost:8080/_ah/admin).

## Deploying to App Engine

To deploy to App Engine:

```bash
$ cd forma-api
$ app_cfg.py update .
```

That will upload all the code to the version specified in the `app.yaml` file. To specify a different version:

```bash
$ cd forma-api
$ app_cfg.py update -V foo .
```

And it will be available at http://foo.forma-api.appspot.com.
