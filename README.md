# suneosay
One of famous Japanese animations Doraemon character Honekawa Suneo says and thinks 

## Install
```
$ npm install -g suneosay
```

## Usage
```
Usage: suneosay [-s say_string] [-t think_string], [-c]

Options:
  -s, --say    Suneo says input text
  -t, --think  Suneo thinks input text
  -c, --cry    Suneo cries and calls his mam
  -h, --help   Diplay this help message
```

### -s
Suneo says input text  
```
$ suneosay -s 'Hello!!'
       ______________
      |              >
      |              >
      |______________>
       |           |
       |    \   /  |
       <       >    \
        \       ----/
         \_________/ /\
                    /  \
            | --------------- |
            | Hello!!         |
            | --------------- |
```

### from stdin
sunaosay can accept text from stdin

```
$ cat test.txt | suneosay
       ______________
      |              >
      |              >
      |______________>
       |           |
       |    \   /  |
       <       >    \
        \       ----/
         \_________/ /\
                    /  \
            | -------------------- |
            | ママの料理は最高だね  |
            |                      |
            | -------------------- |
```

### -t
Suneo thinks input text
```
$ suneosay -t "I'm hungry"
 | --------------- |
 | I'm hungry      |
 | --------------- |
        O
           o
       ______________
      |              >
      |              >
      |______________>
       |           |
       |    \   /  |
       <       >    \
        \       ----/
         \_________/
```

### -s and -t
Suneo thinks and says input texts.
He often says differernt things from his thinking.
```
$ suneosay -s 'Gian, you are a great singer!!' -t  'Gian is a terrible singer...'
 | ---------------------------- |
 | Gian is a terrible singer... |
 | ---------------------------- |
        O
           o
       ______________
      |              >
      |              >
      |______________>
       |           |
       |    \   /  |
       <       >    \
        \       ----/
         \_________/ /\
                    /  \
            | ------------------------------ |
            | Gian, you are a great singer!! |
            | ------------------------------ |
```

### -c
Suneo cries and calls his mother because he loves his mother.
```
$ suneosay -c
       ______________
      |              >
      |              >
      |______________>
       |           |
       |    \   /  |
       <       >    \
        \       ----/
         \_________/ /\
                    /  \
            | ------------------------------------- |
            |                                _   _  |
            | |\   /|   /\   |\   /|   /\   | | | | |
            | | \_/ |  /--\  | \_/ |  /--\  |_| |_| |
            | |     | /    \ |     | /    \ [_] [_] |
            |                                       |
            | ------------------------------------- |
```

