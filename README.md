Eppo Feature Flag Service
===========================

You should spend about 2-4 hours working on this prompt.

Description
-----------

You've been given a protobuf definition file that defines a feature flagging [gRPC](https://grpc.io/) interface. Your task is to create a server that implements this interface. Time permitting, implement the server as if it will operate in a production environment and be subsequently used and worked on by a team of engineers. If you make compromises to keep your solution simple and timely, please be sure to bring them up in the discussion part of your deliverables.

We want to be able to run and test your solution, so be sure to include instructions on how to get it up and running. You can assume we'll be running the service in a system like Kubernetes or Google's Cloud Run. In memory storage for any necessary data structures/models is acceptable - no need to setup and manage a persistent data store.

You can use any officially supported gRPC language (see: https://grpc.io/docs/).


Deliverables
------------

There are 3 deliverables that should come in the form of this git repository (either zipped and sent to us, or made available as a `clone`-able repository):

1. A `gRPC` server that implements the `EppoFeatureFlagService` interface
2. Instructions on how to test your solution
3. Discussion of limitations or known issues with your solution, how you'd change it for production given more time and resources, and any other thoughts you have about the problem, your solution, or the tools you used.
