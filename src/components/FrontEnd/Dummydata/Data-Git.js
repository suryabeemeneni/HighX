// -------------------------------------------------------- GHCone -----------------------------------------------------------------------//

export const GHCone = [
    {
      h5 : 'GitHub for Windows',
      p : 'htps://windows.github.com'
    },
    {
      h5 : 'GitHub for Mac',
      p : 'htps://mac.github.com'
    },
    {
      h5 : '',
      p : 'For Linux and Solaris platforms, the latest release is available on the official Git web site.'
    },
    {
      h5 : 'Git for All Platforms',
      p : 'htp://git-scm.com'
    }
  ]
  // ````````````````````````````````````````````````//
  export const GHCCont = [
    {
      h3 : 'Create a new repository',
      p1 : 'A repository contains all project files, including the revision history. Already have a project repository elsewhere?',
      sub : [
        {
          h5 : 'Public'  ,
          p : 'Anyone on the internet can see this repository. You choose who can commit.',
        },
        {
          h5 : 'Private'  ,
          p : 'You choose who can see and commit to this repository.',
        },
      ],
    },
    {
      h3 : 'SETUP',
      p1 : 'Configuring user information used across all local repositories',
      sub : [
        {
          h5 : 'git config --global user.name “[firstname lastname]”'  ,
          p : 'set a name that is identifiable for credit when review version history',
        },
        {
          h5 : 'git config --global user.email “[valid-email]”'  ,
          p : 'set an email address that will be associated with each history marker',
        },
      ],
    },
    {
      h3 : 'SETUP & INIT',
      p1 : 'Configuring user information, initializing and cloning repositories',
      sub : [
        {
          h5 : 'git init'  ,
          p : 'initialize an existing directory as a Git repository',
        },
        {
          h5 : 'git clone [url]'  ,
          p : 'retrieve an entire repository from a hosted location via URL',
        },
      ],
    },
    {
      h3 : 'STAGE & SNAPSHOT',
      p1 : 'Working with snapshots and the Git staging area',
      sub : [
        {
          h5 : 'git status'  ,
          p : 'show modified files in working directory, staged for your next commit',
        },
        {
          h5 : 'git add [file]'  ,
          p : 'add a file as it looks now to your next commit (stage)',
        },
        {
          h5 : 'git commit -m “[descriptive message]”'  ,
          p : 'commit your staged content as a new commit snapshot',
        },
      ],
    },
    {
      h3 : 'BRANCH & MERGE',
      p1 : 'Isolating work in branches, changing context, and integrating changes',
      sub : [
        {
          h5 : 'git branch'  ,
          p : 'list your branches. a * will appear next to the currently active branch',
        },
        {
          h5 : 'git branch [branch-name]'  ,
          p : 'create a new branch at the current commit',
        },
        // {
        //   h5 : 'git checkout'  ,
        //   p : 'switch to another branch and check it out into your working directory',
        // },
        {
          h5 : 'git merge [branch]'  ,
          p : 'merge the specified branch’s history into the current one',
        },
        {
          h5 : 'git log'  ,
          p : 'show all commits in the current branch’s history',
        },
      ],
    },
    {
      h3 : 'SHARE & UPDATE',
      p1 : 'Retrieving updates from another repository and updating local repos',
      sub : [
        {
          h5 : 'git pull'  ,
          p : 'fetch and merge any commits from the tracking remote branch',
        },
        {
          h5 : 'git push [alias] [branch]'  ,
          p : 'Transmit local branch commits to the remote repository branch',
        },
      ],
    },
    {
      h3 : 'TEMPORARY COMMITS',
      p1 : 'Temporarily store modified, tracked files in order to change branches',
      sub : [
        {
          h5 : 'git stash dro'  ,
          p : 'discard the changes from top of stash stack',
        },
        {
          h5 : 'git stash'  ,
          p : 'Save modified and staged changes',
        },
        {
          h5 : 'git stash pop'  ,
          p : 'write working from top of stash stack',
        },
        // {
        //   h5 : 'git stash list'  ,
        //   p : 'list stack-order of stashed file changes',
        // },
      ],
    },
    
    // {
    //   h3 : '',
    //   p1 : '',
    //   sub : [
    //     {
    //       h5 : ''  ,
    //       p : '',
    //     },
    //     {
    //       h5 : ''  ,
    //       p : '',
    //     },
    //   ],
    // },
  ]

  // --------------------------------------------------------- GHCone -----------------------------------------------------------------------//

  // ------------------------------------------------------------- F A Q --------------------------------------------------------------------//

export const faq = [
    {
      title: "How to Enroll This Online Courses?",
      desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Where It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How to Enroll This Online Courses?",
      desc: "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Where It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "How It is hidden by default, until the collapse?",
      desc: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  ];
  
// ------------------------------------------------------------- F A Q --------------------------------------------------------------------//