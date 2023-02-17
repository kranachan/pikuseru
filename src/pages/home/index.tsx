import { Button } from 'components/button'
import {
  AlignJustify,
  Aperture,
  Brush,
  Candy,
  Cookie,
  Eraser,
  Facebook,
  Figma,
  FileDown,
  Gamepad,
  Github,
  Heart,
  Image,
  Instagram,
  Languages,
  Moon,
  PaintBucket,
  Palette,
  PlusCircle,
  Redo2,
  Sliders,
  Sun,
  Twitter,
  Undo2,
  Verified,
  Wand,
} from 'lucide-react'
import VariableColorLogo from 'assets/icons/variable-color-logo.svg?component'
import styles from './index.module.css'
import { ButtonGroup } from 'components/button-group'
import { Fragment } from 'react'
import { Dialog } from 'components/dialog'
import { atom, useAtom } from 'jotai'
import { ColorScheme, Theme } from 'constants/theme'
import { useTheme } from 'hooks/use-theme'
import { ajisai, chestnut, daphne, maackia, systemScheme } from 'themes'
import { Switch } from 'components/switch'

const openGithubRepo = () => {
  window.open('https://github.com/magician-of-mekarius/pikuseru', '_blank')
}

const themeDialogOpenAtom = atom(false)

const ThemeDialog = () => {
  const [themeDialogOpen, setThemeDialogOpen] = useAtom(themeDialogOpenAtom)
  const {
    isAutoScheme,
    scheme: storedScheme,
    theme: storedTheme,
    setScheme,
    setTheme,
  } = useTheme()
  const isDarkMode = storedScheme === ColorScheme.Dark

  const getPrimaryColor = (theme: Theme) => {
    const appliedScheme = isAutoScheme
      ? systemScheme
      : (storedScheme as ColorScheme.Light | ColorScheme.Dark)

    return theme[appliedScheme].primary
  }

  const themes = [chestnut, daphne, ajisai, maackia]

  return (
    <Dialog
      open={themeDialogOpen}
      onClose={() => setThemeDialogOpen(false)}
      headline="THEME OPTIONS"
    >
      <div className={styles['theme-header']}>
        <PaintBucket size={32} />
        <b>COLORS</b>
        <Switch
          className={'ml-auto'}
          onClick={() => {
            setScheme(isDarkMode ? ColorScheme.Light : ColorScheme.Dark)
          }}
          isOn={isDarkMode}
          onIcon={Moon}
          offIcon={Sun}
        />
      </div>
      <div className={styles['theme-colors']}>
        {themes.map((theme, index) => {
          const isCurrentTheme =
            getPrimaryColor(theme) === getPrimaryColor(storedTheme)

          return (
            <div
              className={styles['theme-color-self']}
              style={{ backgroundColor: getPrimaryColor(theme) }}
              onClick={() => setTheme(theme)}
              key={index}
            >
              {isCurrentTheme && (
                <Verified
                  className={styles['theme-color-selected-icon']}
                  size={32}
                />
              )}
            </div>
          )
        })}
      </div>
    </Dialog>
  )
}

export const Home = () => {
  const [, setThemeDialogOpen] = useAtom(themeDialogOpenAtom)
  return (
    <Fragment>
      <ThemeDialog />
      <div className={styles.layout}>
        <div className={styles.header}>
          <Button className={styles.menu}>
            <AlignJustify size={32} />
          </Button>
          <VariableColorLogo
            className={'flex-shrink-0 bg-primary text-background rounded-full'}
            width={62}
            height={62}
          />
          <b className={styles.appName}>PIKUSERU</b>
          <section className={styles.options}>
            <Button onClick={() => setThemeDialogOpen(true)}>
              <Palette size={28} />
            </Button>
            <Button>
              <Figma size={28} />
            </Button>
            <Button onClick={openGithubRepo}>
              <Github size={28} />
            </Button>
            <Button className={'px-5'}>
              <Languages size={28} />
              <b>ENGLISH</b>
            </Button>
          </section>
        </div>

        <div className={styles['canvas-root']}>
          <div className={styles['guide']}>
            <Heart size={48} />
            <Wand size={48} />
            <Gamepad size={48} />
            <Candy size={48} />
            <Cookie size={48} />
            <p>
              STEP 1 YOU SHOULD KNOW <br /> BECOME A SOLO-ROCKSTAR
            </p>
            <Button>
              <PlusCircle />
              NEW CREATION
            </Button>
            <Button>
              <Image />
              ADD IMAGE
            </Button>
            <span>OR DRAG TO HERE</span>
          </div>
        </div>

        <div className={styles['modify-bar']}>
          <ButtonGroup groupName="RECORD" buttonClasses={'w-16 h-14'}>
            <Button>
              <Undo2 size={28} />
            </Button>
            <Button>
              <Redo2 size={28} />
            </Button>
          </ButtonGroup>

          <ButtonGroup groupName="DRAWING" buttonClasses={'w-14 h-14'}>
              <Brush size={28} />
            </Button>
            <Button>
              <Eraser size={28} />
            </Button>
            <Button>
              <Sliders size={28} />
            </Button>
          </ButtonGroup>

          <ButtonGroup groupName="PRESENT" buttonClasses={'px-6 h-14'}>
            <Button>
              <Aperture size={28} />
              <b>NONE</b>
            </Button>
          </ButtonGroup>

          <section className={styles['modify-output']}>
            <ButtonGroup groupName="SHARE TO" buttonClasses={'w-14 h-14'}>
              <Button>
                {/* FIXME: SVG Alignment */}
                <Twitter className={'relative left-0.5'} size={28} />
              </Button>
              <Button>
                <Facebook size={28} />
              </Button>
              <Button>
                <Instagram size={28} />
              </Button>
            </ButtonGroup>

            <Button className={'w-36 h-14'}>
              <FileDown size={28} />
              <b>EXPORT</b>
            </Button>
          </section>
        </div>
      </div>
    </Fragment>
  )
}
