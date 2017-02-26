module.exports={
	entry:{
		index:'./src/main.js',
	},
	output:{
		path:'./dist',
		filename:'bundle.js'
	},
	resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    module: {	
		loaders: [
				{ 
					test: /\.css$/, 
					loader: "style-loader!css-loader" 
				},
				{ 
					test: /\.js$/, 
					loader: 'babel-loader'
				},
				{ 
					test: /\.jsx$/, 
					loader: 'babel?presets[]=react&presets[]=es2015' 
				},
			]
    }
}