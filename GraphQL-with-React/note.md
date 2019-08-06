## Index
- [1. Query Fragment](#1)
- [2. Intoroduction to Mutations](#2)
- [3. NonNull](#3)
- [4. Delete Mutation](#4)
- [5. Edit Mutation](#5)
- [6. Apollo Server vs GraphQL Server](#6)
- [7. Working through the schema](#7)
- [8. Apollo Client Setup](#8)
- [9. GQL Queries in React](#9)
- [10. Bonding Quries with Components](#10)
- [11. Query Params](#11)
- [12. Defining Query Variables in React](#12)
- [13. Troubleshooting List Fetching](#13)
- [14. Refetching Queries](#14)
- [15. Associating Mutations with a Component](#15)
- [16. Refetching a Query](#16)
- [17. Fetching Individual Records](#17)

<h2 name="1">1. Query Fragments</h2>

- 프론트엔드단에서 그래프QL을 이용할때 요청을 보낼경우 이름을 명시해주는것이 좋다.
    ```js
    query fetchCompany {
        company(id: "1") {
            id
            name
            description
        }
    }
    ```
- 객체처럼 쿼리를 보낼때 키를 설정해 줄 수도 있다. 
    ```js
    {
        apple: company(id:"1") {
            id
            name
            description
        }
        google: company(id:"1") {
            id
            name
            description
        }
    }
    ```
- 프로퍼티의 중복은 query fragments로 해결 (근데 많이 쓰이지는 않는다.)
    ```js
    {
        apple: company(id:"1") {
            ...companyDetails
        }
        google: company(id:"1") {
            ...companyDetails
        }
    }

    fragment companyDetails on Company {
        id
        name
        description
    }
    ```

<h2 name="2">2. Introduction to Mutations</h2>

- query -> Root Query -> Usertype & CompanyType처럼 mutation을 설정
- mutaion -> Mutations -> addUser & deleteUser

    ```js
    const mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            // fiedls property describes the operation that this mutation undertake
            addUser: {
                type: UserType,
                args: {
                    firstName: { type: GraphQLString },
                    age: { type: GraphQLInt },
                    companyId: { type: GraphQLString }
                },
                resolve() {

                }
            }
        }
    })
    ```

<h2 name="3">3. NonNull Fields and Mutations</h2>

- addUser에 있는 프로퍼티들의 값들의 validation을 위해 GraphQLNonNUll을 사용
    ```js
    const mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            // fields property describes the operation that this mutation undertake
            addUser: {
                type: UserType,
                args: {
                    firstName: { type: new GraphQLNonNull(GraphQLString) },
                    age: { type: new GraphQLNonNull(GraphQLInt) },
                    companyId: { type: GraphQLString }
                },
                resolve() {

                }
            }
        }
    })
    ```
- 즉, 이 mutation을 사용하기 위해서는 firstName과 age는 필수
- resolve 함수를 작성해주고 GraphQLSchema에 추가해주기
    ```js
    const mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            // fields property describes the operation that this mutation undertake
            addUser: {
                type: UserType,
                args: {
                    firstName: { type: new GraphQLNonNull(GraphQLString) },
                    age: { type: new GraphQLNonNull(GraphQLInt) },
                    companyId: { type: GraphQLString }
                },
                resolve(parentValue, { firstName, age}) {
                    return axios.post(`http://localhost:3000/users`, { firstName, age })
                        .then(res => res.data)
                }
            }
        }
    })

    module.exports = new GraphQLSchema({
        query: RootQuery,
        mutation
    });
    ```
- GraphiQL을 이용해 mutation 확인해보기
    ```js
    mutation {
        addUser(firstName: "Stephen", age: 26) {
            id
            firstName
            age
        }
    }
    ```

<h2 name="4">4. Delete Mutation</h2>

    ```js
    deleteUser: {
        type: UserType,
        args: {
            id: { type: GraphQLNonNull(GraphQLString) }
        }, 
        resolve(parentValue, args) {
            return axios.delete(`http://localhost:3000/users/${args.id}`)
                .then(res => res.data);
        }
    }
    ```
    ```js
    // 이렇게 요청
    mutation {
        deleteUser(id:"40") {
            id // return null
        }
    }
    ```

- return은 null값 (json서버가 원래 그럼)

<h2 name="5">5. Edit Mutation</h2>

- put 리퀘스트는 전체적으로 수정, patch 리퀘스트는 리퀘스트 바디에 있는 내용만 수정하기 때문에 patch를 사용
    ```js
    editUser: {
        type: UserType,
        args: {
            id: { type: GraphQLNonNull(GraphQLString) },
            firstName: { type: (GraphQLString) },
            age: { type: (GraphQLInt) },
            companyId: { type: GraphQLString }
        },
        resolve(parentValue, args) {
            return axios.patch(`http://localhost:3000/users/${args.id}`, args)
                .then(res => res.data);
        }
    }
    ```
    ```js
    // 이렇게 요청
    mutation {
        editUser(id:"40", age: 10) {
            id
            firstName
            age
        }
    }
    ```

<h2 name="6">6. Sidenote - Apollo Server vs GraphQL Server</h2>

- GraphQL Express
    ```js
    const CompanyType = new GraphQLObjectType({
        name: 'Company',
        fields: () => ({
            id: { type: GraphQLString },
            name: { type: GraphQLString },
            description: { type: GraphQLString },
        users: {
            type: new GrapjhQLList(UserType),
            resolve(parentValue, orgs) {
                return User.findById(args.id)
            }
        }
        })
    }),
    ```
- Apollo Server
    - Types File
    ```js
    type User {
        id: String!
        firstName: String
        age: Int
        company: Company
    }

    type Company {
        id: String!
        name: String
        employees: [User]
    }
    ```
    - Resolvers File
    ```js
    const resolveFunctions = {
        Query: {
            users() {
                return users,
            },
        }
    }
    ```
- GraphQL Express와 아폴로 서버간 누가 더 우월한건 없으나 GraphQL Express가 아폴로 서버보다 안정적임. (아폴로 서버는 계속해서 업데이트 되는중)
- 아폴로 서버는 두개의 파일(types file, resolvers file)을 만들어야한다. 반면에 GraphQL Express는 타입선언과 resolve 함수가 같이 있다.

 <h2 name="7">7. Working through the schema</h2>

- 깃헙에서 스테판의 자료를 다운받고 몽고DB 셋팅해주기 
- 세팅이 완료된 뒤에 npm run dev를 입력하고 GraphiQL로 들어가 쿼리들 확인해보기
- GraphiQL에서 song과 lyric의 mutation 사용하기
- song 추가
    ```js
    mutation {
        addSong(title: "Cold Night") {
            id // 새로 생성된 song의 아이디값 반환
        }
    }
    ```
- lyric 추가
    ```js
    mutation {
    addLyricToSong(songId: "5d47cbeac84c672563d46801", content: "very very cold night"){
            id // lyric이 추가된 song의 아이디값 반환
        }
    }
    ```
- 모든 song들과 해당되는 lyrics를 반환
    ```js
    {
        songs {
            id
            title
            lyrics {
            content
            }
        }
    }
    ```
<h2 name="8">8. Apollo Client Setup</h2>

- 리액트앱과 그래프QL을 같이 사용하기 위해서 아폴로 클라이언트를 사용
- 아폴로 클라이언트는 백엔드에 있는 그래프QL서버와 소통하면서 요청한 데이터를 받아와 클라이언트에 저장한다. 
- Apollo Store
    - 아폴로 스토어는 그래프QL 서버와 소통하면서 서버로부터 오는 데이터를 저장하는 클라이언트 사이드 레포지토리 
- Apollo Provider
    - 하지만 아폴로 스토어 그 자체로는 리액트를 인지하지 못하기때문에 Apollo Provider를 사용 
    - Provider는 데이터를 스토어에서 가져와서 리액트앱에 주입한다. 
- 아폴로 클라이언트 기본적인 셋업
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import ApolloClient from 'apollo-client'; 
    import { ApolloProvider } from 'react-apollo';

    // ApolloClient는 우리가 /graphql을 사용하는것을 이미 알고있다 
    const client = new ApolloClient({});

    const Root = () => {
        return (
            <ApolloProvider client={client}>
                <div>Lyrical</div>
            </ApolloProvider>
        )
    };

    ReactDOM.render(
    <Root />,
    document.querySelector('#root')
    );
    ```

<h2 name="9">9. GQL Queries in React</h2>

- 리액트앱에서 직접 쿼리를 쳐서 데이터 가져오기
- GraphQL + React Strategy
	1. Identify data requiered by our individual components  
	2. Write query in Graphiql(for practice) and in component file
	3. Bond query + component
	4. Access data!
- SongList 컴포넌트에서 쿼리를 보내야하지만 쿼리는 자바스크립트 코드가 아니기 때문에 graphql-tag 라이브러리를 사용한다. 
	```js
	import gql from 'graphql-tag';

	const query = gql`
		{
			songs {
				title
			}
		}
	`;
	```

<h2 name="10">10. Bonding Quries with Components</h2>

-	작성한 쿼리와 컴포넌트를 묶기 위해서 react-apollo를 이용한다.
	```js
	import React, { Component } from 'react';
	import gql from 'graphql-tag';
	import { graphql } from 'react-apollo';

	class SongList extends Component {
		render() {
			return (
				<div>
					SongList
				</div>
			)
		}
	}

	const query = gql`
		{
			songs {
				title
			}
		}
	`;

	export default graphql(query)(SongList);
	```
- react-apollo의 graphql은 컴포넌트가 렌더되면 query를 백엔드 서버에 보낸다.
- 쿼리 작업이 끝나면 컴포넌트가 자동적으로 다시한번 렌더된다. 
- 하지만 쿼리작업이 끝났다고 하더라도 어떻게 컴포넌트에서 데이터를 사용할 수 있을까? 
- 그래프ql로부터 받은 데이터들은 컴포넌트의 props 객체에 저장되어있다. 
- 컴포넌트는 데이터를 받기 전, 받은 후 총 두번 렌더링이 된다. console.log를 이용해 컴포넌트의 props를 보면 두번 렌더링 되는것을 확인 할 수 있는데 처음에 받은 데이터에는 songs 객체가 없으나 마지막에 받은 데이터에는 songs 객체가 존재한다. 

<h2 name="11">11. Query Params</h2>

-	mutation을 이용해 사용자가 입력한 노래제목을 추가하려고 했으나 mutation 변수가 컴포넌트 밖에 존재하는 문제가 발생
	```js
    class SongList extends Component {

    renderSongs() {
        return this.props.data.songs.map(song => {
        return (
            <li key={song.id} className="collection-item">
            {song.title}
            </li>
        );
        });
    }

		render() {
			if(this.props.data.loading) {
				return <div>Loading....</div>;
			}
			return (
				<ul className="collection"> 
					{this.renderSongs()}
				</ul>
			)
		}
	}

	const query = gql`
		{
			songs {
				id
				title
			}
		}
	`;
	```
- 이럴경우를 대비해 그래프QL에서는 Query Variable이라는게 존재한다. 
	```js
	mutation AddSong($title: String) {
		addSong(title: $title) {
			id
			title
		}
	}
	```

<h2 name="12">12. Defining Query Variables in React</h2>

- mutation을 사용하기 위해 graphql-tag를 import한뒤에 mutation과 컴포넌트를 감싼다. 
	```js
	import gql from 'graphql-tag';

	const mutation = gql`
		mutation AddSong($title:String) {
			addSong(title: $title) {
				title
			}
		}
	`;

	export default graphql(mutation)(SongCreate);
	```
- 이렇게하면 SongList처럼 props에 data가 생기는것 대신 muatate함수가 생겨난다
- this.props.muatate함수를 실행하면 mutation 변수가 작동한다. 
- 실행시키기위해 컴포넌트 onSubmit에 mutate함수를 이어준다.
	```js
	onSubmit(e) {
		e.preventDefault();
		this.props.mutate({
			variables: {
				title: this.state.title
			}
		});
	}
	```
- 폼에 텍스트를 입력하고 엔터를 누르면 노래 리스트에 추가된다.

<h2 name="13">13. Troubleshooting List Fetching</h2>

- 노래 리스트에서 새로고침을 한 뒤에 노래 추가페이지로 돌아가서 노래제목을 입력하고 엔터를 누르고 다시 리스트 페이지로 돌아가게 되면 새로 입력한 노래가 리스트에서 보이지 않고 새로고침을 해야 보인다. 
- Fetch Songs -> Songs 2, 3, 4 fetched -> Create Song 5 -> Go to SongList -> Already fetched query, no need to fetch again -> Render Songs 2, 3, 4
- 아폴로를 사용해서 리스트로 된 데이터를 다룰 때 흔히 발생한다.
- 해결하는 방법은 mutation을 실행한 뒤 전체 쿼리를 다시 시작한다.

<h2 name="14">14. Refetching Queries</h2>

- 아폴로팀에서 위의 문제를 해결할 방법을 만들어 놓음
- 먼저 다른 파일에 쿼리를 따로 빼주기
  ```js
  // fetchSongs.js
  import gql from 'graphql-tag';
  export default gql`
      {
        songs {
          id
          title
        }
      }
  `;
  ```
- SongCreate 컴포넌트에서 쿼리 import한 뒤에 mutate함수안에 refetchQueries 객체 넣어주기
  ```js
  this.props.mutate({
    variables: { title: this.state.title },
    refetchQueries: [{ query: query }]
  }).then(() => hashHistory.push('/'))
  ```
- 만약에 쿼리에 변수가 존재한다면 variables객체를 refetchQueries안에 넣어줘야 한다.

<h2 name="15">15. Associating Mutations with a Component</h2>

- Delete mutation을 컴포넌트에 연결시키기 
- SongList 컴포넌트에 DeleteSong mutation을 설정
  ```js
  const mutation = gql`
    mutation DeleteSong($id: ID) {
      deleteSong(id: $id) {
        id
      }
    }
  `;
  ```
- 하지만 이미 SongList 컴포넌트는 이미 query와 연결되어있으므로 새로 연결시켜주기.
  ```js
  export default graphql(mutation)(
    graphql(query)(SongList)
  );
  ```
- 그런뒤 props를 이용해 mutate 함수 사용하기
  ```js
  onSongDelete(id) {
    this.props.mutate({ variables: { id }}); 
  }

  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
          <i className="material-icons" onClick={() => this.onSongDelete(song.id)}>delete</i>
        </li>
      );
    });
  }
  ```
- 하지만 예상하건데 백엔드에서 해당 아이디의 노래 데이터는 삭제되겠으나 노래목록을 제대로 렌더링 하지 않을것임.
- 예상대로 쓰레기통 아이콘을 클릭하면 해당 노래의 데이터는 바로 없어지는게 아니라 새로 고침을 해야 없어진다. 

<h2 name="16">16. Refetching a Query</h2>

- 이번에는 SongCreate 컴포넌트에서 refetchQueries를 사용했던거와 다른 방법으로 SongList 컴포넌트에서 노래 리스트를 백엔드로부터 가져와보기 
  ```js
  onSongDelete(id) {
    this.props.mutate({ variables: { id }})
      .then(() => this.props.data.refetch());
  }
  ```
- 그렇다면 SongCreate 컴포넌트에서 refetchQueries를 사용한 이유는?
- SongCreate 컴포넌트에서 refetchQueries안의 query는 직접적으로 해당 컴포넌트와의 연관성이 없다. 이와는 반대로 SongList 컴포넌트는 mutation과 연관성을 가지고 있기에 then을 사용할 수 있다. 

<h2 name="17">17. Fetching Individual Records</h2>

- 각 노래의 내용을 확인할 컴포넌트 만들어주기
- 분리된 파일에서 선택한 노래의 정보를 가져올 쿼리를 만들어주기
  ```js
  // fetchSong.js
  import gql from 'graphql-tag';

  export default gql`
    query SongQuery($id: ID!) {
      song(id: $id) {
        id
        title 
      }
    }
  `;
  ```
