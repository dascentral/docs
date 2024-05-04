# AWS S3

[Amazon S3](https://aws.amazon.com/s3/) or Amazon Simple Storage Service is a service offered by Amazon Web Services that provides object storage through a web service interface.

## CLI Cheatsheet

**List all buckets**

```bash
aws s3 ls
```

**Copy remote contents to local**

```bash
aws s3 cp s3://BUCKET/PATH . --recursive --dryrun
```

**Sync remote contents to local**

```bash
aws s3 sync s3://BUCKET/PATH /LOCAL/PATH
```

**Delete a bucket**

```bash
aws s3 rb s3://BUCKET --force
```

The `--force` flag will delete the bucket even if it is not empty.
