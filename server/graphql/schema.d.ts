// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation | ISubscription;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
messages: Array<IMessage>;
}

interface IMessage {
id: string;
user: string;
content: string;
}

interface IMutation {
postMessage: string;
}

interface IPostMessageOnMutationArguments {
input: IPostMessageArgs;
}

interface IPostMessageArgs {
user: string;
content: string;
}

interface ISubscription {
messages: Array<IMessage>;
}
}

// tslint:enable
